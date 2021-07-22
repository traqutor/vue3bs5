<template>
  <div
    class="
      d-flex
      flex-column flex-slide-col flex-slide-col-right flex-slide-col-absolute
      bg-white
      py-2
      ps-4
      shadow
      border-secondary-light border-left
      overflow-hidden
      f-col-mx
    "
    :class="isDrawerVisible ? 'show' : ''"
  >
    <QuickMessages
      v-if="
        templateViewMode === TEMPLATE_VIEW_MODES.QUICK_MESSAGE ||
        templateViewMode === TEMPLATE_VIEW_MODES.TEMPLATES
      "
    />
    <ViewSelectedTemplate
      v-if="templateViewMode === TEMPLATE_VIEW_MODES.TEMPLATE_VIEW"
    />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { TEMPLATE_VIEW_MODES } from "@/store/enums/EnumTypes";
import QuickMessages from "@/components/conversation/chat/chat-text-selector/QuickMessages";
import ViewSelectedTemplate from "@/components/conversation/chat/chat-text-selector/ViewSelectedTemplate";

export default {
  components: { QuickMessages, ViewSelectedTemplate },
  setup() {
    const store = useStore();
    const isDrawerVisible = computed(
      () => store.getters.getIsQuickChatTextSelectorVisible
    );
    const templateViewMode = computed(() => store.getters.getTemplateViewMode);

    return {
      isDrawerVisible,
      templateViewMode,
      TEMPLATE_VIEW_MODES,
    };
  },
};
</script>
