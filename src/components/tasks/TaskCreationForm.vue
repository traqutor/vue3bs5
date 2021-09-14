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
              <div class="d-flex mt-3 align-items-center">
                <feather-map-pin class="me-3 f-icon-20 text-secondary" />

                <div
                  class="media-body"
                  :class="{ invalid: !fromLocation.isValid }"
                >
                  <div class="text-secondary mb-2">
                    Destination <span class="text-danger">*</span>
                  </div>
                  <div
                    class="
                      input-group input-group-sm
                      dropdown dropdown-input-group
                      filter-control-group
                    "
                  >
                    <input
                      type="text"
                      class="
                        form-control
                        bg-light
                        dropdown-input-control
                        is-filter-control
                        shadow-none
                      "
                      v-model="fromLocation.val"
                      @blur="clearValidity('fromLocation')"
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="
                          btn btn-light
                          border-left-0
                          text-secondary text-dark-hover
                          dropdown-toggle dropdown-toggle-split
                        "
                        datab-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></button>
                      <div
                        class="
                          dropdown-menu dropdown-menu-sm dropdown-menu-right
                          w-100
                          shadow
                          dropdown-insert-click
                        "
                        id="destination-group-type"
                        x-placement="bottom-end"
                        style="
                          position: absolute;
                          will-change: transform;
                          top: 0px;
                          left: 0px;
                          transform: translate3d(0px, 31px, 0px);
                        "
                      >
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                              is-filtered
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><feather-circle /> <feather-check-circle
                            /></span>
                            <span class="is-filtered">Room IPC.001</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><feather-circle /> <feather-check-circle
                            /></span>
                            <span class="is-filtered">Room IPC.002</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><feather-circle /> <feather-check-circle
                            /></span>
                            <span class="is-filtered">Room IPC.003</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><feather-circle /> <feather-check-circle
                            /></span>
                            <span class="is-filtered">Room IPC.004</span>
                          </label>
                        </div>
                        <div class="no-filter-results is-hidden">
                          <div class="dropdown-item px-3">No results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- start::fromLocation -->

              <!-- start::toLocation -->
              <div class="d-flex align-items-center">
                <feather-map-pin
                  class="me-3 align-self-center f-icon-20 text-secondary"
                />

                <div
                  class="media-body"
                  :class="{ invalid: !toLocation.isValid }"
                >
                  <label for="toLocation" class="mb-2">
                    Location <span class="text-danger">*</span>
                  </label>
                  <div
                    class="
                      input-group input-group-sm
                      dropdown dropdown-input-group
                      filter-control-group
                    "
                  >
                    <input
                      id="toLocation"
                      v-model.trim="toLocation.val"
                      @blur="clearValidity('toLocation')"
                      type="text"
                      class="
                        form-control
                        bg-light
                        dropdown-input-control
                        is-filter-control
                        shadow-none
                      "
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="
                          btn btn-light
                          border-left-0
                          text-secondary text-dark-hover
                          dropdown-toggle dropdown-toggle-split
                          shadow-none
                        "
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      ></button>
                      <div
                        class="
                          dropdown-menu dropdown-menu-sm dropdown-menu-right
                          w-100
                          shadow
                          dropdown-insert-click
                        "
                        id="location-group-type"
                        x-placement="bottom-end"
                        style="
                          position: absolute;
                          will-change: transform;
                          top: 0px;
                          left: 0px;
                          transform: translate3d(0px, 31px, 0px);
                        "
                      >
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                              is-filtered
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20">
                              <feather-circle /> <feather-check-circle />
                            </span>
                            <span class="is-filtered">Room IPC.001</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-circle"
                              >
                                <circle cx="12" cy="12" r="10"></circle></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-check-circle"
                              >
                                <path
                                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                ></path>
                                <polyline
                                  points="22 4 12 14.01 9 11.01"
                                ></polyline></svg
                            ></span>
                            <span class="is-filtered">Room IPC.002</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-circle"
                              >
                                <circle cx="12" cy="12" r="10"></circle></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-check-circle"
                              >
                                <path
                                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                ></path>
                                <polyline
                                  points="22 4 12 14.01 9 11.01"
                                ></polyline></svg
                            ></span>
                            <span class="is-filtered">Room IPC.003</span>
                          </label>
                        </div>
                        <div class="dropdown-item px-3">
                          <label
                            class="
                              mb-0
                              toggle-input toggle-input-success
                              f-size-13
                            "
                          >
                            <input type="radio" name="age" />
                            <span class="input-icon f-icon-20"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-circle"
                              >
                                <circle cx="12" cy="12" r="10"></circle></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-check-circle"
                              >
                                <path
                                  d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                ></path>
                                <polyline
                                  points="22 4 12 14.01 9 11.01"
                                ></polyline></svg
                            ></span>
                            <span class="is-filtered">Room IPC.004</span>
                          </label>
                        </div>
                        <div class="no-filter-results is-hidden">
                          <div class="dropdown-item px-3">No results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::toLocation -->
            </div>

            <div class="border-top border-secondary-light mt-4 mb-3"></div>

            <!-- start::taskRequiredParticipants -->
            <div class="d-flex">
              <feather-user-plus
                class="me-3 align-self-center f-icon-20 text-secondary"
              />

              <div
                class="media-body"
                :class="{ invalid: !taskRequiredParticipants.isValid }"
              >
                <div class="text-secondary mb-2">
                  Available To <span class="text-danger">*</span>
                </div>
                <div class="input-group input-group-sm border-0">
                  <input
                    type="text"
                    class="form-control form-control-sm bg-light shadow-none"
                    readonly=""
                    data-toggle="modal"
                    data-target="#ModalAvailableTo"
                  />
                </div>
              </div>
            </div>
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
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";
import FeatherClock from "@/icons/FeatherClock";
import FeatherUser from "@/icons/FeatherUser";
import FeatherUserPlus from "@/icons/FeatherUserPlus";

export default {
  components: {
    DatePicker,
    FeatherUserPlus,
    FeatherUser,
    FeatherClock,
    FeatherCheckCircle,
    FeatherCircle,
    FeatherFileText,
    FeatherMapPin,
    FeatherChevronLeft,
  },
  props: ["selectedType"],
  setup(props) {
    const store = useStore();

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
        taskTypeId: computed(() => props.selectedType.id),
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
            return {
              id: "",
              userId: participant.id,
              isRole: participant.isRole,
              minimumRequiredQuantity: 0,
            };
          }
        ),
      };

      store
        .dispatch(Actions.onCreateTask, payload)
        .then(() => {})
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
