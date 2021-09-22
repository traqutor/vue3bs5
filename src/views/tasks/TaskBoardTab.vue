<template>
  <div class="flex-fill d-flex flex-column h-100">
    <div class="row section-widget position-relative flex-fill">
      <!-- start::left navigation filter menu -->
      <TasksBoardLeftNavMenuFilter />
      <!-- end::left navigation filter menu -->

      <!-- start::board wrapper -->
      <div class="col d-flex flex-column pl-4">
        <div class="flex-section-slide flex-fill">
          <!-- start::board -->
          <TaskBoardScheduled
            v-if="boardViewMode === tasksBoardViewModes.SCHEDULED"
          />
          <TaskBoard v-else />
          <!-- end::board -->

          <!-- start::board right drawer-->
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
          <!-- end::board right drawer-->
        </div>
      </div>
      <!-- end::board wrapper-->
    </div>
  </div>
</template>
<script>
import TasksBoardLeftNavMenuFilter from "@/components/tasks/tasksBoard/TasksBoardLeftNavMenuFilter";
import TaskBoard from "@/components/tasks/tasksBoard/TaskBoard";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import TaskDrawerDetails from "@/components/tasks/TaskDrawerDetails";
import { TASKS_BOARD_VIEW_MODES } from "@/store/enums/EnumTypes";
import TaskBoardScheduled from "@/components/tasks/tasksBoard/TaskBoardScheduled";
export default {
  components: {
    TaskBoardScheduled,
    TaskDrawerDetails,
    TaskBoard,
    TasksBoardLeftNavMenuFilter,
  },
  setup() {
    const store = useStore();
    const tasksBoardViewModes = ref(TASKS_BOARD_VIEW_MODES);
    const boardViewMode = computed(() => store.getters.getTasksBoardViewMode);

    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    return {
      isDrawerVisible,
      boardViewMode,
      tasksBoardViewModes,
    };
  },
};
</script>
