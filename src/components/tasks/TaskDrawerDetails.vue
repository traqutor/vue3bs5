<template>
  <div v-if="task" class="flex-fill position-relative">
    <div
      class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden"
    >
      <!-- start::task details header -->
      <div class="mb-2 d-flex align-items-center">
        <TaskColorIndicator :task="task" />
        <div class="overflow-hidden">
          <div class="text-truncate f-size-16 font-weight-middle">
            {{ task.title }}
          </div>
        </div>
        <div class="d-flex align-items-center me-auto ms-2">
          <TaskStatusBadge class="ms-1" :task="task" />
          <TaskDueTimeBadge class="ms-1" :task="task" />
        </div>
        <div class="d-flex align-items-center ms-2">
          <button
            class="btn btn-sm btn-secondary-light shadow-none ms-2"
            @click="onCloseDrawer"
          >
            <feather-x />
          </button>
        </div>
      </div>
      <!-- end::task details header -->

      <!-- start::task detail navigation -->
      <nav class="side-nav-line">
        <div
          class="nav nav-tabs border-bottom border-secondary-light"
          style="min-height: 38px"
          role="tablist"
          id="chatNavTab"
        >
          <a class="nav-item nav-link active">Details</a>

          <a class="nav-item nav-link"
            >Conversation<span class="badge badge-pill ms-2 badge-primary"
              >7</span
            ></a
          >

          <a class="nav-item nav-link">Location</a>

          <div class="btn-toolbar ms-auto">
            <div class="is-hidden steps-section" data-control="#nav-contact">
              <div
                class="step-tabpanel active show"
                id="header-details-btn-group-1"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="
                      btn
                      shadow-none
                      btn-dark
                      bg-transparent
                      pl-3
                      pr-1
                      nav-item nav-link
                    "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-more-horizontal f-icon-26"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                  <div
                    class="
                      dropdown-menu dropdown-menu-sm dropdown-menu-right
                      shadow
                    "
                  >
                    <a
                      class="dropdown-item step-tabpanel-open"
                      data-outside="true"
                      href="#dialog-content-section-2, #header-details-btn-group-2"
                      >Information</a
                    >
                    <button
                      type="button"
                      class="dropdown-item"
                      data-toggle="modal"
                      data-target="#ModalParticipantsAdd"
                    >
                      Add participants
                    </button>
                    <a
                      class="dropdown-item step-tabpanel-open"
                      data-outside="true"
                      href="#dialog-content-section-5, #header-details-btn-group-2"
                      >Whisper to someone</a
                    >
                  </div>
                </div>
              </div>

              <div class="step-tabpanel" id="header-details-btn-group-2">
                <a
                  class="
                    btn btn-sm btn-secondary-light
                    border-0
                    shadow-none
                    rounded
                    step-tabpanel-open
                  "
                  data-outside="true"
                  href="#dialog-content-section-1, #header-details-btn-group-1"
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
                    class="feather feather-chevron-left f-icon-16"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- start::task detail navigation -->

      <!-- start::task details content -->
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
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      mt-3
                    "
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
                          class="
                            me-3
                            align-self-center
                            f-icon-20
                            text-secondary
                          "
                        />
                        <div class="media-body ms-n1">
                          <div class="text-secondary f-size-13">From</div>
                          <div>{{ task.fromLocation }}</div>
                        </div>
                      </div>
                      <div class="d-flex mt-2">
                        <feather-map-pin
                          class="
                            me-3
                            align-self-center
                            f-icon-20
                            text-secondary
                          "
                        />
                        <div class="media-body ms-n1">
                          <div class="text-secondary f-size-13">To</div>
                          <div>{{ task.toLocation }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end::location destination -->

                  <div
                    class="border-top border-secondary-light mt-4 mb-3"
                  ></div>

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

                  <div
                    class="border-top border-secondary-light mt-4 mb-3"
                  ></div>

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

                  <div
                    class="border-top border-secondary-light mt-4 mb-3"
                  ></div>

                  <!-- start::assigned to -->
                  <div class="mb-2 text-secondary mt-3">Assigned To</div>

                  <div
                    class="
                      py-1
                      on-hover
                      hover-action-group
                      overflow-hidden
                      mt-1
                    "
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
                      <button
                        type="button"
                        class="btn btn-primary px-2 shadow-none"
                      >
                        <feather-message-square-line class="f-icon-18" />
                      </button>
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
              <div
                class="d-flex align-items-center justify-content-between my-3"
              >
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
                >
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
      <!-- end::task details content -->
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import TaskStatusBadge from "@/components/tasks/TaskStatusBadge";
import TaskDueTimeBadge from "@/components/tasks/TaskDueTimeBadge";
import FeatherX from "@/icons/FeatherX";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import TaskColorIndicator from "@/components/tasks/TaskColorIndicator";
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherUser from "@/icons/FeatherUser";
import FeatherFileText from "@/icons/FeatherFileText";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import FeatherClock from "@/icons/FeatherClock";
import { timeHhMmaDotDdddFormat } from "@/services/datetime.service";

export default {
  components: {
    FeatherClock,
    FeatherMessageSquareLine,
    ParticipantAvatarNameItem,
    FeatherFileText,
    FeatherUser,
    FeatherMapPin,
    TaskColorIndicator,
    FeatherX,
    TaskDueTimeBadge,
    TaskStatusBadge,
  },
  setup() {
    const taskStartButtonStatuses = ["New"];
    const taskQueueButtonStatuses = ["InProgress", "OnHold"];
    const taskOnHoldButtonStatuses = ["InProgress"];
    const taskCompleteButtonStatuses = ["InProgress"];
    const taskReturnButtonStatuses = ["InProgress", "OnHold", "Queued"];
    const store = useStore();
    const task = computed(() => store.getters.getSelectedTask);

    const onStartTaskAction = () => {
      const payload = {
        taskId: task.value.id,
        activeRoleId: "",
      };
      store.dispatch(Actions.onStartTask, payload);
    };

    const onHoldTaskAction = () => {
      const payload = {
        taskId: task.value.id,
        activeRoleId: "",
      };
      store.dispatch(Actions.onOnHoldTask, payload);
    };

    const onQueueTaskAction = () => {
      const payload = {
        taskId: task.value.id,
        activeRoleId: "",
      };
      store.dispatch(Actions.onQueueTask, payload);
    };

    const onCompleteTaskAction = () => {
      const payload = {
        taskId: task.value.id,
        activeRoleId: "",
      };
      store.dispatch(Actions.onCompleteTask, payload);
    };

    const onReturnTaskAction = () => {
      const payload = {
        taskId: task.value.id,
        activeRoleId: "",
      };
      store.dispatch(Actions.onReturnTask, payload);
    };

    const onCloseDrawer = () => {
      store.commit(Mutations.setIsTaskDrawerVisible, false);
    };

    return {
      task,
      taskStartButtonStatuses,
      taskQueueButtonStatuses,
      taskOnHoldButtonStatuses,
      taskCompleteButtonStatuses,
      taskReturnButtonStatuses,
      onStartTaskAction,
      onHoldTaskAction,
      onQueueTaskAction,
      onCompleteTaskAction,
      onReturnTaskAction,
      onCloseDrawer,
      timeHhMmaDotDdddFormat,
    };
  },
};
</script>
