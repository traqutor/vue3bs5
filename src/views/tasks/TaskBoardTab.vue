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
          <TaskBoard />
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
import { computed } from "vue";
import TaskDrawerDetails from "@/components/tasks/TaskDrawerDetails";
export default {
  components: {TaskDrawerDetails, TaskBoard, TasksBoardLeftNavMenuFilter },
  setup() {
    const store = useStore();
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );
    return {
      isDrawerVisible,
    };
  },
};
</script>
