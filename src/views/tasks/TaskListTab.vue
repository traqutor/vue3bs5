<template>
  <div class="flex-section-slide flex-fill">
    <!-- start::task statuses filter buttons -->
    <div class="flex-slide-content row">
      <div class="col d-flex flex-column">
        <!-- start::header buttons -->
        <div
          class="list-group list-group-horizontal nav-fill list-group-task"
          :class="isTasksFilterActive && 'has-active'"
        >
          <button
            v-for="status of taskActionStatuses"
            :key="status.id"
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              ms-3
              list-task-item
              text-white
              shadow-none
            "
            :class="[
              onGetIsTaskFilterButtonActive(status.id) && 'active ',
              status.class,
            ]"
            @click="onTasksFilterStatusSelect(status)"
          >
            {{ status.label
            }}<span class="f-size-24 font-weight-middle ms-auto">{{
              onGetTasksCountOfStatuses(status.id)
            }}</span>
          </button>

          <div class="btn-group-vertical btn-group-vertical-separate ms-3">
            <button class="btn btn-sm btn-primary toggle-filter-control">
              <feather-refresh-cw />
            </button>
            <button class="btn btn-sm btn-primary shadow-none">
              <feather-filter />
            </button>
          </div>
        </div>
        <!-- end::header buttons -->

        <div class="flex-fill position-relative overflow-hidden mt-4">
          <!-- start::table -->
          <perfect-scrollbar
            class="d-flex flex-column position-absolute h-100 w-100 pe-3"
          >
            <table
              class="
                table
                table-hover
                table-head-sticky
                table-self-middle
                table-todo-list
                table-collapse-list
              "
              id="task-full-list"
            >
              <thead>
                <tr class="bg-white font-weight-middle">
                  <th scope="col" class="pt-1 text-nowrap border-0">Type</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Location
                  </th>
                  <th scope="col" class="pt-1 text-nowrap border-0">Raised</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Assigned To
                  </th>
                  <th scope="col" class="pt-1 text-nowrap border-0">Status</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Due Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="task of tasks" :key="task.id">
                  <tr
                    class="task-item on-hover hover-action-group"
                    :class="task.id === selectedTaskId && 'collapse-list-open'"
                    @click="onTaskSelect(task)"
                  >
                    <td class="ps-2">
                      <div class="d-flex align-items-center overflow-hidden">
                        <TaskColorIndicator :color="task.badgeColour" />
                        <div
                          class="
                            media-body
                            d-flex
                            align-items-center
                            font-weight-middle
                          "
                        >
                          {{ task.title }}
                        </div>
                        <div class="text-secondary f-size-13 ms-3">
                          #{{ task.id }}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="open-map text-primary-hover on-hover">
                        {{ task.fromLocation }}
                        <feather-arrow-right
                          class="text-muted mx-1 f-icon-16 opacity-75"
                        />
                        {{ task.toLocation }}
                      </div>
                    </td>
                    <td>
                      <span class="text-nowrap pe-5">
                        {{ timeTaskCreationFormat(task.created.seconds) }}
                      </span>
                    </td>
                    <td>
                      <span>{{ task.taskRequiredParticipants.length }}</span>
                    </td>
                    <td>
                      <div class="mw-6xl">
                        <TaskStatusBadge :task="task" />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-center table-min-counter">
                        <TaskDueTimeBadge :task="task" />
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </perfect-scrollbar>
          <!-- end::table -->
        </div>
      </div>
    </div>
    <!-- end::task statuses filter buttons -->

    <!-- start::drawer -->
    <div
      class="
        d-flex
        flex-column flex-slide-col flex-slide-col-right
        ps-4
        f-col-lg
      "
      :class="isDrawerVisible && 'show'"
    >
      <div
        class="
          flex-fill
          ps-4
          d-flex
          flex-column
          steps-section
          overflow-hidden
          border-secondary-light border-left
        "
      >
        <TaskDrawerDetails />
      </div>
    </div>
    <!-- end::drawer -->
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { timeTaskCreationFormat } from "@/services/datetime.service";
import FeatherRefreshCw from "@/icons/FeatherRefreshCw";
import FeatherFilter from "@/icons/FeatherFilter";
import FeatherArrowRight from "@/icons/FeatherArrowRight";
import {
  Actions,
  Mutations,
  TASK_ACTION_STATUSES,
} from "@/store/enums/EnumTypes";
import TaskDrawerDetails from "@/components/tasks/TaskDrawerDetails";
import TaskStatusBadge from "@/components/tasks/TaskStatusBadge";
import TaskDueTimeBadge from "@/components/tasks/TaskDueTimeBadge";
import TaskColorIndicator from "@/components/tasks/TaskColorIndicator";

export default {
  components: {
    TaskColorIndicator,
    TaskDueTimeBadge,
    TaskStatusBadge,
    TaskDrawerDetails,
    FeatherArrowRight,
    FeatherFilter,
    FeatherRefreshCw,
  },
  setup() {
    const store = useStore();
    const taskActionStatuses = ref(TASK_ACTION_STATUSES);
    const taskActiveActionStatuses = ref([]);

    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const isTasksFilterActive = computed(() => {
      return taskActiveActionStatuses.value.length > 0;
    });

    const tasks = computed(() => {
      if (isTasksFilterActive.value) {
        // filter by selected statuses
        let filtered = [];

        taskActiveActionStatuses.value.forEach((status) => {

          if (status.id === "New") {
            filtered = filtered.concat(store.getters.getTasks);
          }

          if (status.id === "InProgress") {
            filtered = filtered.concat(
              store.getters.getRequestedTasks.filter(
                (item) => item.taskStatus === status.id
              )
            );
          }

          if (status.id === "Queued") {
            filtered = filtered.concat(
              store.getters.getRequestedTasks.filter(
                (item) => item.taskStatus === status.id
              )
            );
          }

          if (status.id === "Queued") {
            filtered = filtered.concat(
              store.getters.getRequestedTasks.filter(
                (item) => item.taskStatus === status.id
              )
            );
          }

          if (status.id === "OnHold") {
            filtered = filtered.concat(
              store.getters.getRequestedTasks.filter(
                (item) => item.taskStatus === status.id
              )
            );
          }

          if (status.id === "Overdue") {
            filtered = filtered.concat(
              store.getters.getRequestedTasks.filter(
                (item) => item.isDeadlinePassed
              )
            );
          }

          if (status.id === "Completed") {
            filtered = filtered.concat(store.getters.getCompletedTasks);
          }
        });

        return filtered;
      } else {
        return [
          ...store.getters.getTasks,
          ...store.getters.getMyTasks,
          ...store.getters.getRequestedTasks,
          ...store.getters.getCompletedTasks,
        ];
      }
    });

    const selectedTaskId = computed(() => store.getters.getSelectedTaskId);

    const onGetIsTaskFilterButtonActive = (statusId) => {
      return taskActiveActionStatuses.value.find(
        (item) => item.id === statusId
      );
    };

    const onTasksFilterStatusSelect = (status) => {
      const idx = taskActiveActionStatuses.value.findIndex(
        (item) => item.id === status.id
      );
      if (idx !== -1) {
        taskActiveActionStatuses.value.splice(idx, 1);
      } else {
        taskActiveActionStatuses.value.push(status);
      }

      // if all options selected then clear the filter
      if (
        taskActiveActionStatuses.value.length ===
        taskActionStatuses.value.length
      ) {
        taskActiveActionStatuses.value = [];
      }
      console.log(taskActiveActionStatuses.value);
    };

    const onTaskSelect = (task) => {
      if (selectedTaskId.value === task.id) {
        store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
      } else {
        store.commit(Mutations.setIsTaskDrawerVisible, true);
      }
      store.dispatch(Actions.onSelectTask, task.id);
    };

    const onGetTasksCountOfStatuses = (status) => {
      switch (status) {
        case "New":
          return store.getters.getTasks.length;
        case "InProgress":
          return store.getters.getRequestedTasks.filter(
            (item) => item.taskStatus === status
          ).length;
        case "Queued":
          return store.getters.getRequestedTasks.filter(
            (item) => item.taskStatus === status
          ).length;
        case "OnHold":
          return store.getters.getRequestedTasks.filter(
            (item) => item.taskStatus === status
          ).length;
        case "Overdue":
          return store.getters.getRequestedTasks.filter(
            (item) => item.isDeadlinePassed
          ).length;
        case "Completed":
          return store.getters.getCompletedTasks.length;

        default:
          return 0;
      }
    };

    return {
      isDrawerVisible,
      isTasksFilterActive,
      taskActionStatuses,
      taskActiveActionStatuses,
      tasks,
      selectedTaskId,
      onGetTasksCountOfStatuses,
      onGetIsTaskFilterButtonActive,
      timeTaskCreationFormat,
      onTaskSelect,
      onTasksFilterStatusSelect,
    };
  },
};
</script>
