<template>
  <div class="flex-section-slide flex-fill">
    <div class="flex-slide-content row">
      <div class="col d-flex flex-column">
        <!-- start::header buttons -->
        <div class="list-group list-group-horizontal nav-fill list-group-task">
          <button
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
              list-task-item
              text-white
              bg-task-new
              toggle-filter-control
              shadow-none
            "
          >
            New<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("New")
            }}</span>
          </button>
          <button
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
              list-task-item
              bg-task-start
              text-white
              toggle-filter-control
              shadow-none
            "
          >
            Started<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("InProgress")
            }}</span>
          </button>
          <button
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
              list-task-item
              bg-task-queue
              text-white
              toggle-filter-control
              shadow-none
            "
            filter-value="3"
          >
            Queued<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("Queued")
            }}</span>
          </button>
          <button
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
              list-task-item
              bg-task-hold
              text-white
              toggle-filter-control
              shadow-none
            "
          >
            On Hold<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("OnHold")
            }}</span>
          </button>
          <button
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
              list-task-item
              bg-task-overdue
              text-white
              toggle-filter-control
              shadow-none
            "
          >
            Overdue<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("Overdue")
            }}</span>
          </button>
          <button
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
              list-task-item
              bg-task-complete
              text-white
              toggle-filter-control
              shadow-none
            "
          >
            Completed<span class="f-size-24 font-weight-middle ms-auto">{{
              getTasksCountOfStatuses("Completed")
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
                    @click="onTaskSelect(task)"
                  >
                    <td class="ps-2">
                      <div class="d-flex align-items-center overflow-hidden">
                        <TaskColorIndicator :task="task" />
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
                      <div class="d-flex align-items-center">
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
import { computed } from "vue";
import { useStore } from "vuex";
import { timeTaskCreationFormat } from "@/services/datetime.service";
import FeatherRefreshCw from "@/icons/FeatherRefreshCw";
import FeatherFilter from "@/icons/FeatherFilter";
import FeatherArrowRight from "@/icons/FeatherArrowRight";
import { Mutations } from "@/store/enums/EnumTypes";
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
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );
    const tasks = computed(() => store.getters.getTasks);
    const selectedTask = computed(() => store.getters.getSelectedTask);

    const onTaskSelect = (task) => {
      if (selectedTask.value && selectedTask.value.id === task.id) {
        store.commit(Mutations.setSelectedTask, task);
        store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
      } else {
        store.commit(Mutations.setSelectedTask, task);
        store.commit(Mutations.setIsTaskDrawerVisible, true);
      }
    };

    const getTasksCountOfStatuses = (status) => {
      return tasks.value.filter((task) => task.taskStatus === status).length;
    };

    return {
      isDrawerVisible,
      tasks,
      getTasksCountOfStatuses,
      timeTaskCreationFormat,
      onTaskSelect,
    };
  },
};
</script>
