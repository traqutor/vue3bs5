<template>
  <div v-if="selectedType" class="flex-fill position-relative">
    <!-- start::task form -->
    <form
      @submit.prevent="onSubmitForm"
      class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden"
    >
      <!-- start:: selected task header -->
      <div class="mb-3 me-3 d-flex align-items-center overflow-hidden">
        <span class="f-icon me-3"
          ><i
            class="f-icon f-icon-24 rounded"
            :style="`background-color: #${selectedType.badgeColour}`"
          ></i
        ></span>

        <div class="media-body overflow-hidden ms-n1">
          <div class="is-filtered text-truncate f-size-16 font-weight-middle">
            {{ selectedType.title }}
          </div>
        </div>

        <button
          class="btn btn-sm btn-secondary-light ps-1 shadow-none"
          @click="onCancel"
        >
          <feather-chevron-left />
          Back
        </button>
      </div>
      <!-- end:: selected task header -->

      <!-- start:: created task fields -->
      <div class="flex-fill position-relative d-flex flex-column">
        <div class="d-flex flex-column position-absolute w-100 h-100">
          <perfect-scrollbar class="pe-3 pb-1">
            <div class="position-relative mt-2">
              <i
                class="
                  f-icon
                  position-absolute position-left-center
                  h-25
                  border-left border-grey
                  ms-2
                  opacity-50
                "
              ></i>

              <!-- start::fromLocation -->
              <TaskLocationFormField
                v-model="fromLocation.val"
                label="Location"
                :is-valid="fromLocation.isValid"
              />
              <!-- start::fromLocation -->

              <!-- start::toLocation -->
              <TaskLocationFormField
                v-model="toLocation.val"
                label="Destination"
                :is-valid="toLocation.isValid"
              />
              <!-- end::toLocation -->
            </div>

            <div class="border-top border-secondary-light mt-4 mb-3"></div>

            <!-- start::taskRequiredParticipants -->
            <TaskRequiredParticipantsFormField
              v-model="taskRequiredParticipants.val"
              :is-valid="taskRequiredParticipants.isValid"
              label="Available To"
            />
            <!-- end::taskRequiredParticipants -->

            <!-- start::deadlineDate -->
            <div class="d-flex mt-3">
              <feather-clock
                class="me-3 align-self-center f-icon-20 text-secondary"
              />

              <div
                class="media-body"
                :class="{ invalid: !deadlineDate.isValid }"
              >
                <div class="text-secondary mb-2">Due Time</div>
                <div class="input-group input-group-sm border-0">
                  <DatePicker
                    v-model="deadlineDate.val"
                    mode="dateTime"
                    :timezone="timezone"
                  />
                  <input
                    type="text"
                    class="form-control form-control-sm bg-light shadow-none"
                    readonly=""
                    data-toggle="modal"
                    data-target="#ModalDueTime"
                  />
                </div>
              </div>
            </div>
            <!-- end::deadlineDate -->

            <div class="border-top border-secondary-light mt-4 mb-3"></div>

            <!-- start::subjectId -->
            <div class="d-flex">
              <feather-user
                class="me-3 align-self-center f-icon-20 text-secondary"
              />

              <div class="media-body">
                <div class="text-secondary mb-2">Patient</div>
                <div class="input-group input-group-sm border-0">
                  <input
                    type="text"
                    class="form-control form-control-sm bg-light shadow-none"
                    value=""
                  />
                </div>
              </div>
            </div>
            <!-- end::subjectId -->

            <div class="border-top border-secondary-light mt-4 mb-3"></div>

            <!-- start::notes -->
            <div class="d-flex">
              <feather-file-text
                class="me-3 align-self-center f-icon-20 text-secondary"
              />
              <div
                class="media-body"
                :class="{ invalid: !fromLocation.isValid }"
              >
                <div class="text-secondary mb-2">Notes</div>
                <textarea
                  class="
                    form-control form-control-sm
                    bg-light
                    f-size-13
                    shadow-none
                  "
                  v-model="notes.val"
                ></textarea>
              </div>
            </div>
            <!-- end::notes -->
          </perfect-scrollbar>
        </div>
      </div>
      <!-- end:: created task fields -->
      <div>
        {{ toLocation }}
        {{ fromLocation }}
        {{ taskRequiredParticipants }}
      </div>
      <div class="pt-2 text-danger" v-if="!isFormValid">
        Please fix the above errors and submit again.
      </div>

      <!-- start::submit task button -->
      <div class="p-2">
        <button
          type="submit"
          class="btn btn-sm btn-primary btn-lg btn-block f-size-15 mt-2"
        >
          Submit
        </button>
      </div>
      <!-- end::submit task button -->
    </form>
    <!-- end::task form -->
  </div>
</template>
<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { DatePicker } from "v-calendar";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import FeatherChevronLeft from "@/icons/FeatherChevronLeft";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherClock from "@/icons/FeatherClock";
import FeatherUser from "@/icons/FeatherUser";
import TaskLocationFormField from "@/components/tasks/TaskLocationFormField";
import TaskRequiredParticipantsFormField from "@/components/tasks/TaskRequiredParticipantsFormField";
import router from "@/router";
import { useRouter } from "vue-router";

export default {
  components: {
    TaskRequiredParticipantsFormField,
    TaskLocationFormField,
    DatePicker,
    FeatherUser,
    FeatherClock,
    FeatherFileText,
    FeatherChevronLeft,
  },
  props: ["selectedType"],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const event = reactive({
      isFormSaving: false,
      isFormValid: true,
      timezone: "",
      activeRoleId: { val: "", isValid: true },
      subjectId: { val: "", isValid: true },
      fromLocation: { val: "", isValid: true },
      toLocation: { val: "", isValid: true },
      notes: { val: "", isValid: true },
      deadlineDate: { val: "", isValid: true },
      customFields: { val: [], isValid: true },
      taskRequiredParticipants: { val: [], isValid: true },
    });

    const clearValidity = (input) => {
      event.isFormValid = true;
      event[input].isValid = true;
    };

    const onValidateForm = () => {
      event.isFormValid = true;
      if (event.fromLocation.val === "") {
        event.fromLocation.isValid = false;
        event.isFormValid = false;
      }
      if (event.toLocation.val === "") {
        event.toLocation.isValid = false;
        event.isFormValid = false;
      }
      if (event.taskRequiredParticipants.val.length <= 0) {
        event.taskRequiredParticipants.isValid = false;
        event.isFormValid = false;
      }
    };

    const onSubmitForm = () => {
      onValidateForm();

      if (!event.isFormValid) {
        return;
      }

      const payload = {
        taskTypeId: +props.selectedType.id,
        activeRoleId: event.activeRoleId.val,
        subjectId: event.subjectId.val,
        fromLocation: event.fromLocation.val,
        toLocation: event.toLocation.val,
        notes: event.notes.val,
        deadlineDate: event.deadlineDate.val,
        isIncident: false,
        customFields: [],
        taskRequiredParticipants: event.taskRequiredParticipants.val.map(
          (participant) => {
            if (participant.isRole) {
              return {
                id: "",
                userId: participant.id,
                isRole: true,
                minimumRequiredQuantity: 0,
              };
            } else {
              return {
                id: "",
                userId: participant.userId,
                isRole: participant.isRole,
                minimumRequiredQuantity: 0,
              };
            }
          }
        ),
      };

      store
        .dispatch(Actions.onCreateTask, payload)
        .then(() => {
          store.dispatch(Actions.onGetTaskList);
          router.push({ path: "/tasks/taskList" });
        })
        .catch(() => {});
    };

    const onCancel = () => {
      store.commit(Mutations.setSelectedTaskTypeCreation, null);
    };
    return {
      ...toRefs(event),
      clearValidity,
      onValidateForm,
      onSubmitForm,
      onCancel,
    };
  },
};
</script>
