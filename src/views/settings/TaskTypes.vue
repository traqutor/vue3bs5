<template>
  <div class="section-content">
    <nav class="side-nav-line side-nav-line-main nav-line-center">
      <div class="nav nav-tabs nav-fill border-secondary-light">
        <span
          class="nav-item nav-link on-hover"
          role="tab"
          :class="viewMode === TASK_TYPES_VIEW_MODES.LIST && 'active'"
          @click="onViewMode(TASK_TYPES_VIEW_MODES.LIST)"
          >Task Types</span
        >

        <span
          class="nav-item nav-link on-hover"
          role="tab"
          :class="viewMode === TASK_TYPES_VIEW_MODES.ADD_NEW && 'active'"
          @click="onViewMode(TASK_TYPES_VIEW_MODES.ADD_NEW)"
          >Add New</span
        >
      </div>
    </nav>
  </div>
  <div class="d-flex flex-column position-relative flex-fill">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <TaskTypesListTab v-if="viewMode === TASK_TYPES_VIEW_MODES.LIST" />
      <TaskTypesAddNewTab v-if="viewMode === TASK_TYPES_VIEW_MODES.ADD_NEW" />
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Mutations, TASK_TYPES_VIEW_MODES } from "@/store/enums/EnumTypes";
import TaskTypesListTab from "@/components/settings/taskFlow/TaskTypesListTab";
import TaskTypesAddNewTab from "@/components/settings/taskFlow/TaskTypesAddNewTab";

export default {
  components: { TaskTypesAddNewTab, TaskTypesListTab },
  setup() {
    const store = useStore();
    const viewMode = computed(() => store.getters.getTaskTypesViewMode);

    const onViewMode = (mode) => {
      store.commit(Mutations.setTaskTypesViewMode, mode);
    };

    return {
      viewMode,
      onViewMode,
      TASK_TYPES_VIEW_MODES,
    };
  },
};
</script>
