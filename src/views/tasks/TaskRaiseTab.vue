<template>
  <div class="d-flex flex-column position-relative flex-fill">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="d-flex flex-column h-100">
        <div class="flex-fill row">
          <!-- start:: task type select and task form -->
          <div class="col f-col-2x d-flex flex-column steps-section">
            <!-- start:: task raise form -->
            <TaskCreationForm
              v-if="selectedType"
              :selectedType="selectedType"
            />
            <!-- start:: task raise form -->

            <!-- start:: task type selector -->
            <TaskCreationTypeSelector v-else />
            <!-- end:: task type selector -->
          </div>
          <!-- end:: task type select and task form-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskCreationForm from "@/components/tasks/taskRaise/TaskCreationForm";
import TaskCreationTypeSelector from "@/components/tasks/taskRaise/TaskCreationTypeSelector";
export default {
  components: { TaskCreationTypeSelector, TaskCreationForm },
  setup() {
    const store = useStore();
    const selectedType = computed(
      () => store.getters.getSelectedTaskTypeCreation
    );

    return { selectedType };
  },
};
</script>
