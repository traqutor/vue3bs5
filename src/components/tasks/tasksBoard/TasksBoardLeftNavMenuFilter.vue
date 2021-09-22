<template>
  <div
    class="
      col
      f-col-xxs
      pr-2
      d-flex
      flex-column
      overflow-hidden
      border-right border-secondary-light
    "
  >
    <div class="d-flex flex-column flex-fill position-relative">
      <perfect-scrollbar
        class="position-absolute h-100 w-100 pr-3 media-type-group"
      >
        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            bg-primary
            text-white
            shadow-none
          "
          :class="boardViewMode === tasksBoardViewModes.TASKS && 'active'"
          @click="onboardViewModeSelect(tasksBoardViewModes.TASKS)"
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              Tasks
            </div>
          </div>
        </button>

        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            bg-primary
            text-white
            shadow-none
          "
          :class="boardViewMode === tasksBoardViewModes.MY_REQUESTS && 'active'"
          @click="onboardViewModeSelect(tasksBoardViewModes.MY_REQUESTS)"
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              My requests
            </div>
          </div>
        </button>

        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            bg-primary
            text-white
            shadow-none
          "
          :class="boardViewMode === tasksBoardViewModes.SCHEDULED && 'active'"
          @click="onboardViewModeSelect(tasksBoardViewModes.SCHEDULED)"
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              Scheduled
            </div>
          </div>
        </button>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { Mutations, TASKS_BOARD_VIEW_MODES } from "@/store/enums/EnumTypes";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const tasksBoardViewModes = ref(TASKS_BOARD_VIEW_MODES);
    const boardViewMode = computed(() => store.getters.getTasksBoardViewMode);

    const onboardViewModeSelect = (mode) => {
      store.commit(Mutations.setTasksBoardViewMode, mode);
    };

    return { boardViewMode, tasksBoardViewModes, onboardViewModeSelect };
  },
};
</script>
