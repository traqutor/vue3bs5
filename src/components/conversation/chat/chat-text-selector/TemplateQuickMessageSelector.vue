<template>
  <div class="d-flex flex-column flex-slide-col flex-slide-col-right flex-slide-col-absolute bg-white py-2 pl-4 shadow border-secondary-light border-left overflow-hidden steps-section f-col-mx"
       id="dialogTempsList"
  >
    <QuickMessages v-if="getTemplateViewMode === TEMPLATE_VIEW_MODE.QUICK_MESSAGE || getTemplateViewMode === TEMPLATE_VIEW_MODE.TEMPLATES" />
    <ViewSelectedTemplate v-if="getTemplateViewMode === TEMPLATE_VIEW_MODE.TEMPLATE_VIEW" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import QuickMessages from "@/views/content/conversation/chat-text-selector/QuickMessages";
import ViewSelectedTemplate from "@/views/content/conversation/chat-text-selector/ViewSelectedTemplate";
import { TEMPLATE_VIEW_MODE } from "@/store/modules/template";
export default {
  name: "TemplateQuickMessageSelector",
  data() {
    return {
      TEMPLATE_VIEW_MODE
    }
  },
  computed: {
    ...mapGetters([
        "getTemplates",
        "getTemplateViewMode",
    ]),
  },
  components: { QuickMessages, ViewSelectedTemplate }
}
</script>
