<template>
  <div class="flex-section-slide flex-fill">
    <!-- start::task statuses filter buttons -->
    <div class="flex-slide-content row">
      <div class="col d-flex flex-column">
        <!-- start:: media type selection chips buttons -->
        <div class="d-flex chips-buttons-nav">
          <button-chip
            v-for="status of TASK_ACTION_STATUSES"
            @click="onStatusSelect(status)"
            :key="status.id"
            :active="selectedStatus.id === status.id"
            class="me-2"
            >{{ status.label }}</button-chip
          >
        </div>

        <div class="flex-fill position-relative overflow-hidden mt-3">
          <!-- start::table -->
          <perfect-scrollbar
            class="d-flex flex-column position-absolute h-100 w-100 pe-3"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col" class="text-nowrap border-0 ps-3">
                    Task no.
                  </th>
                  <th scope="col" class="text-nowrap border-0">Task type</th>
                  <th scope="col" class="text-nowrap border-0">Location</th>
                  <th scope="col" class="text-nowrap border-0">Raised</th>
                  <th scope="col" class="text-nowrap border-0">Assigned To</th>
                  <th scope="col" class="text-nowrap border-0">Status</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="task of tasks" :key="task.id">
                  <TaskTableRowItem :task="task" />
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
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { TASK_ACTION_STATUSES } from "@/store/enums/EnumTypes";
import TaskDrawerDetails from "@/components/tasks/taskDrawer/TaskDrawerDetails";
import ButtonChip from "@/components/common/buttons/ButtonChip";
import TaskTableRowItem from "@/components/tasks/taksTable/TaskTableRowItem";

export default {
  components: {
    TaskTableRowItem,
    ButtonChip,
    TaskDrawerDetails,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const selectedStatus = ref(TASK_ACTION_STATUSES[0]);

    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const tasks = computed(() => {
      if (route.params.flag) {
        //my tasks
        switch (selectedStatus.value.id) {
          case "Unassigned":
            return store.getters.getUnassignedTasks;
          case "InProgress":
            return store.getters.getRequestedTasks.filter(
              (item) => item.taskStatus === "InProgress"
            );
          case "Queued":
            return store.getters.getRequestedTasks.filter(
              (item) => item.taskStatus === "Queued"
            );
          case "Completed":
            return store.getters.getRequestedCompletedTasks;
          default:
            return [];
        }
      } else {
        switch (selectedStatus.value.id) {
          case "Unassigned":
            return store.getters.getUnassignedTasks;
          case "InProgress":
            return store.getters.getMyTasks.filter(
              (item) => item.taskStatus === "InProgress"
            );
          case "Queued":
            return store.getters.getMyTasks.filter(
              (item) => item.taskStatus === "Queued"
            );
          case "Completed":
            return store.getters.getMyCompletedTasks;
          default:
            return [];
        }
      }
    });

    const onStatusSelect = (status) => {
      selectedStatus.value = status;
    };

    return {
      isDrawerVisible,
      selectedStatus,
      tasks,
      onStatusSelect,
      TASK_ACTION_STATUSES,
    };
  },
};
</script>
