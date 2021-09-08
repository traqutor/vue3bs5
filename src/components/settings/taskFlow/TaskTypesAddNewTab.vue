<template>
  <!-- start::task types add new tab component -->
  <div class="h-100">
    <div class="d-flex flex-column h-100">
      <div class="flex-fill position-relative overflow-hidden">
        <TaskTypeDefinitionForm v-model="taskType" />
      </div>
      <div>title: {{ taskType.title }}</div>
      <div class="btn-group btn-group-sm mt-5 f-col-2x">
        <button
          type="button"
          class="btn btn-sm rounded w-50 btn-primary me-3"
          @click="onCreateTaskType"
        >
          Save
        </button>
        <button
          type="button"
          class="btn btn-sm rounded w-50 btn-secondary-light"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!-- end::task types add new tab component -->
</template>
<script>
import TaskTypeDefinitionForm from "@/components/settings/taskFlow/TaskTypeDefinitionForm";
import { ref } from "vue";
import { useStore } from "vuex";
import { Actions, TASK_TYPE_EMPTY } from "@/store/enums/EnumTypes";
import { guidsGetOne } from "@/services/guids.service";
export default {
  components: { TaskTypeDefinitionForm },
  setup() {
    const isCreating = ref();
    const taskType = ref(Object.assign({}, TASK_TYPE_EMPTY));
    const store = useStore();
    const onCreateTaskType = () => {
      taskType.value.id = guidsGetOne();
      store
        .dispatch(Actions.onCreateType, taskType.value)
        .then(() => {
          isCreating.value = false;
        })
        .catch(() => {
          isCreating.value = false;
        });
    };

    return { taskType, isCreating, onCreateTaskType };
  },
};
</script>
