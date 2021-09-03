<template>
  <!-- start::task types add new tab component -->
  <div class="h-100">
    <div class="d-flex flex-column h-100">
      <div class="flex-fill position-relative overflow-hidden">
        <TaskTypeDefinitionForm />
      </div>
      <div class="btn-group btn-group-sm mt-5 f-col-2x">
        <button type="button" class="btn btn-sm rounded w-50 btn-primary me-3">
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
export default {
  components: { TaskTypeDefinitionForm },
};
</script>
