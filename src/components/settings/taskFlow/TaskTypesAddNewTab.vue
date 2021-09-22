<template>
  <!-- start::task types add new tab component -->
  <div class="h-100">
    <div class="d-flex flex-column h-100">
      <div class="flex-fill position-relative overflow-hidden">
        <TaskTypeDefinitionForm v-model="taskType" />
      </div>
      <div class="btn-group btn-group-sm mt-5 f-col-2x">
        <button
          type="button"
          class="btn btn-sm rounded w-50 btn-primary me-3"
          @click="onCreateTaskType"
        >
          <div
              v-if="isFormSaving"
              class="spinner-border spinner-border-sm"
              role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          Save
        </button>
        <button
          type="button"
          class="btn btn-sm rounded w-50 btn-secondary-light"
          @click="onCancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!-- end::task types add new tab component -->
</template>
<script>
import TaskTypeDefinitionForm from "@/components/settings/taskFlow/taskTypeForm/TaskTypeDefinitionForm";
import { ref } from "vue";
import { useStore } from "vuex";
import {
  Actions,
  Mutations,
  TASK_TYPE_EMPTY,
  TASK_TYPES_VIEW_MODES,
} from "@/store/enums/EnumTypes";
export default {
  components: { TaskTypeDefinitionForm },
  setup() {
    const isFormSaving = ref();
    const taskType = ref(Object.assign({}, TASK_TYPE_EMPTY));
    const store = useStore();
    const onCreateTaskType = () => {
      isFormSaving.value = true;
      store
        .dispatch(Actions.onCreateType, taskType.value)
        .then(() => {
          store.getters(Actions.onGetTypes);
          store.commit(
            Mutations.setTaskTypesViewMode,
            TASK_TYPES_VIEW_MODES.LIST
          );
          isFormSaving.value = false;
        })
        .catch(() => {
          isFormSaving.value = false;
        });
    };

    const onCancel = () => {
      store.commit(Mutations.setTaskTypesViewMode, TASK_TYPES_VIEW_MODES.LIST);
    };

    return { taskType, isFormSaving, onCancel, onCreateTaskType };
  },
};
</script>
