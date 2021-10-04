<template>
  <div class="d-flex flex-column flex-fill pt-1">
    <div class="flex-fill position-relative">
      <div class="d-flex flex-column h-100 w-100 position-absolute">
        <div class="d-flex flex-column flex-fill position-relative">
          <div
            class="
              d-flex
              flex-column
              position-absolute
              w-100
              h-100
              overflow-hidden
            "
          >
            <perfect-scrollbar class="pe-3">
              <!-- start::location destination -->
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <div class="position-relative">
                  <i
                    class="
                      f-icon
                      position-absolute position-left-center
                      h-20
                      border-left border-grey
                      ms-2
                      opacity-50
                    "
                  ></i>

                  <div class="d-flex">
                    <feather-map-pin
                      class="me-3 align-self-center f-icon-20 text-secondary"
                    />
                    <div class="media-body ms-n1">
                      <div class="text-secondary f-size-13">From</div>
                      <div>{{ task.fromLocation }}</div>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <feather-map-pin
                      class="me-3 align-self-center f-icon-20 text-secondary"
                    />
                    <div class="media-body ms-n1">
                      <div class="text-secondary f-size-13">To</div>
                      <div>{{ task.toLocation }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::location destination -->

              <div class="border-top border-secondary-light mt-4 mb-3"></div>

              <!-- start::patient -->
              <div class="d-flex">
                <feather-user
                  class="me-3 align-self-center f-icon-20 text-secondary"
                />

                <div class="media-body ms-n1">
                  <div class="text-secondary f-size-13">Patient Name</div>
                  <div>{{ task.subjectId }}</div>
                </div>
              </div>
              <!-- end::patient -->

              <div class="border-top border-secondary-light mt-4 mb-3"></div>

              <!-- start::notes -->
              <div class="d-flex">
                <feather-file-text
                  class="me-3 align-self-center f-icon-20 text-secondary"
                />

                <div class="media-body ms-n1">
                  <div class="text-secondary f-size-13">Notes</div>
                  <div>{{ task.notes }}</div>
                </div>
              </div>
              <!-- end::notes -->

              <div class="border-top border-secondary-light mt-4 mb-3"></div>

              <!-- start::assigned to -->
              <div class="mb-2 text-secondary mt-3">Assigned To</div>

              <div
                class="py-1 on-hover hover-action-group overflow-hidden mt-1"
              >
                <template
                  v-for="participant of task.taskRequiredParticipants"
                  :key="participant.id"
                >
                  <ParticipantAvatarNameItem
                    class="mb-3"
                    :participant-id="participant.userId"
                  />
                </template>

                <div
                  class="
                    btn-group btn-group-sm
                    hover-action-control
                    bg-light
                    rounded
                  "
                >
                  <!-- start:: open conversation for assigned users -->
                  <button
                    type="button"
                    class="btn btn-primary px-2 shadow-none"
                    @click="onOpenConversation"
                  >
                    <feather-message-square-line class="f-icon-18" />
                  </button>
                  <!-- end:: open conversation for assigned users -->
                </div>
              </div>
              <!-- end::assigned to -->

              <!-- start::requested by -->
              <div class="mb-2 text-secondary mt-3">Requested by</div>

              <div class="py-1 on-hover hover-action-group overflow-hidden">
                <ParticipantAvatarNameItem
                  class="mb-3"
                  :participant-id="task.creatorId"
                />

                <div
                  class="
                    btn-group btn-group-sm
                    hover-action-control
                    bg-light
                    rounded
                  "
                >
                  <button
                    type="button"
                    class="btn btn-primary px-2 shadow-none"
                  >
                    <feather-message-square-line class="f-icon-18" />
                  </button>
                </div>
              </div>
              <!-- end::requested by -->
            </perfect-scrollbar>
          </div>
        </div>

        <!-- start::task bottom actions buttons -->
        <div class="mt-2 border-top border-secondary-light">
          <div class="d-flex align-items-center justify-content-between my-3">
            <!-- start::task reference number -->
            <div class="d-flex align-items-center">
              <span class="text-secondary">#{{ task.id }}</span>
            </div>
            <!-- end::task reference number -->

            <!-- start::task creation time -->
            <div class="d-flex align-items-center">
              <feather-clock class="text-secondary me-2" />

              <div class="media-body text-nowrap">
                {{ timeHhMmaDotDdddFormat(task.created.seconds) }}
              </div>
            </div>
            <!-- end::task creation time -->
          </div>

          <!-- start::task action buttons -->
          <div class="btn-group btn-group-sm w-100 btn-status-group">
            <!-- start:: return button -->
            <button
              v-if="
                taskReturnButtonStatuses.some(
                  (status) => status === task.taskStatus
                )
              "
              type="button"
              class="
                btn btn-sm
                shadow-none
                btn-secondary-light
                w-50
                rounded
                me-3
              "
              @click="onReturnTaskAction"
            >
              <div
                v-if="isReturnAction"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              Return
            </button>
            <!-- end:: return button -->

            <!-- start:: start button -->
            <button
              v-if="
                taskStartButtonStatuses.some(
                  (status) => status === task.taskStatus
                )
              "
              type="button"
              class="
                btn btn-sm
                shadow-none
                text-white
                bg-task-start
                w-50
                rounded
                me-3
              "
              @click="onStartTaskAction"
            >
              <div
                v-if="isStartAction"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              Start
            </button>
            <!-- end:: start button -->

            <!-- start:: on hold button -->
            <button
              v-if="
                taskOnHoldButtonStatuses.some(
                  (status) => status === task.taskStatus
                )
              "
              type="button"
              class="
                btn btn-sm
                shadow-none
                text-white
                bg-task-on-hold
                w-50
                rounded
                me-3
              "
              @click="onHoldTaskAction"
            >
              <div
                v-if="isOnHoldAction"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              On Hold
            </button>
            <!-- end:: on hold button -->

            <!-- start:: complete button -->
            <button
              v-if="
                taskCompleteButtonStatuses.some(
                  (status) => status === task.taskStatus
                )
              "
              type="button"
              class="
                btn btn-sm
                shadow-none
                text-white
                bg-task-complete
                w-50
                rounded
                me-3
              "
              @click="onCompleteTaskAction"
            >
              <div
                v-if="isCompleteAction"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              Complete
            </button>
            <!-- end:: complete button -->

            <!-- start:: queue button -->
            <button
              v-if="
                taskQueueButtonStatuses.some(
                  (status) => status === task.taskStatus
                )
              "
              type="button"
              class="
                btn btn-sm
                shadow-none
                text-white
                bg-task-queue
                w-50
                rounded
              "
              @click="onQueueTaskAction"
            >
              <div
                v-if="isQueueAction"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              Queue
            </button>
            <!-- end:: queue button -->
          </div>
          <!-- end::task action buttons -->
        </div>
        <!-- end::task bottom actions buttons -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import FeatherClock from "@/icons/FeatherClock";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherUser from "@/icons/FeatherUser";
import FeatherMapPin from "@/icons/FeatherMapPin";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { timeHhMmaDotDdddFormat } from "@/services/datetime.service";
import { CONVERSATION_VIEW_MODES } from "@/const";

export default {
  props: ["task"],
  emits: ["onViewModeChange"],
  setup(props, { emit }) {
    const store = useStore();

    const taskStartButtonStatuses = ["New"];
    const taskQueueButtonStatuses = ["InProgress", "OnHold"];
    const taskOnHoldButtonStatuses = ["InProgress"];
    const taskCompleteButtonStatuses = ["InProgress"];
    const taskReturnButtonStatuses = ["InProgress", "OnHold", "Queued"];
    const isStartAction = ref(false);
    const isOnHoldAction = ref(false);
    const isQueueAction = ref(false);
    const isCompleteAction = ref(false);
    const isReturnAction = ref(false);

    const onStartTaskAction = () => {
      isStartAction.value = true;
      const payload = {
        taskId: props.task.id,
        activeRoleId: "",
      };
      store
        .dispatch(Actions.onStartTask, payload)
        .then(() => {
          isStartAction.value = false;
        })
        .catch(() => {
          isStartAction.value = false;
        });
    };

    const onHoldTaskAction = () => {
      isOnHoldAction.value = true;
      const payload = {
        taskId: props.task.id,
        activeRoleId: "",
      };
      store
        .dispatch(Actions.onOnHoldTask, payload)
        .then(() => {
          isOnHoldAction.value = false;
        })
        .catch(() => {
          isOnHoldAction.value = false;
        });
    };

    const onQueueTaskAction = () => {
      isQueueAction.value = true;
      const payload = {
        taskId: props.task.id,
        activeRoleId: "",
      };
      store
        .dispatch(Actions.onQueueTask, payload)
        .then(() => {
          isQueueAction.value = false;
        })
        .catch(() => {
          isQueueAction.value = false;
        });
    };

    const onCompleteTaskAction = () => {
      isCompleteAction.value = true;
      const payload = {
        taskId: props.task.id,
        activeRoleId: "",
      };
      store
        .dispatch(Actions.onCompleteTask, payload)
        .then(() => {
          isCompleteAction.value = false;
        })
        .catch(() => {
          isCompleteAction.value = false;
        });
    };

    const onReturnTaskAction = () => {
      isReturnAction.value = true;
      const payload = {
        taskId: props.task.id,
        activeRoleId: "",
      };
      store
        .dispatch(Actions.onReturnTask, payload)
        .then(() => {
          isReturnAction.value = false;
        })
        .catch(() => {
          isReturnAction.value = false;
        });
    };

    const onOpenConversation = () => {
      if (props.task.conversationId) {
        emit("onViewModeChange", "Conversation");
      } else {
        console.log("setConversationViewMode");
        store.commit(
          "setSelectedParticipants",
          props.task.taskRequiredParticipants.map((item) => {
            const participant = store.getters.getParticipantById(item.userId);
            return {
              id: participant.id,
              isRole: participant.isRole,
              name: participant.name,
            };
          })
        );
        store.commit("setConversationViewMode", CONVERSATION_VIEW_MODES.NEW);
      }
    };

    return {
      taskStartButtonStatuses,
      taskQueueButtonStatuses,
      taskOnHoldButtonStatuses,
      taskCompleteButtonStatuses,
      taskReturnButtonStatuses,
      isStartAction,
      isOnHoldAction,
      isQueueAction,
      isCompleteAction,
      isReturnAction,
      onStartTaskAction,
      onHoldTaskAction,
      onQueueTaskAction,
      onCompleteTaskAction,
      onReturnTaskAction,
      onOpenConversation,
      timeHhMmaDotDdddFormat,
    };
  },

  components: {
    FeatherClock,
    FeatherMessageSquareLine,
    ParticipantAvatarNameItem,
    FeatherFileText,
    FeatherUser,
    FeatherMapPin,
  },
};
</script>
