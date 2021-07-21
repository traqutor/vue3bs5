<template>
  <div
      class="flex-fill d-flex flex-column"
  >
    <perfect-scrollbar class="d-flex flex-column h-100 w-100 position-absolute">
      <div class="mb-2 d-flex align-items-center pr-4">

        <div class="overflow-hidden mr-auto">
          <div class="text-truncate f-size-16 font-weight-middle">
            Templates and Quick messages
          </div>
        </div>

        <div class="d-flex align-items-center ">
          <b-button class="btn-sm" @click="onToggleTemplatesAndQuickMessages()">
            <b-icon icon="x"></b-icon>
          </b-button>
        </div>
      </div>

      <div class="pr-4">
        <b-nav class="side-nav-line border-bottom border-secondary-light">
          <b-nav-item :active="getTemplateViewMode === TEMPLATE_VIEW_MODE.QUICK_MESSAGE"
                      @click="onTab(TEMPLATE_VIEW_MODE.QUICK_MESSAGE)">
            {{ TEMPLATE_VIEW_MODE.QUICK_MESSAGE }}
          </b-nav-item>

          <b-nav-item :active="getTemplateViewMode === TEMPLATE_VIEW_MODE.TEMPLATES"
                      @click="onTab(TEMPLATE_VIEW_MODE.TEMPLATES)">
            {{ TEMPLATE_VIEW_MODE.TEMPLATES }}
          </b-nav-item>

        </b-nav>
      </div>

      <div class="d-flex flex-column flex-fill pt-1">
        <div class="flex-fill position-relative">
          <div class="d-flex flex-column h-100 w-100 position-absolute">
            <div class="ps-scrollbar ps-scrollbar-hidden ps">
              <div
                  v-if="getTemplateViewMode === TEMPLATE_VIEW_MODE.QUICK_MESSAGE"
                  class="list-group list-group-flush overflow-hidden select-action-group mt-2">
                <div
                    v-for="(message, index) of getQuickMessages"
                    :key="index"
                    @click="onTextSelection(message)"
                    class="list-group-item p-2 pr-4 rounded list-group-item-action border-0 on-hover media">
                  <div class="media-body overflow-hidden">
                    <div class="text-truncate">{{ message }}</div>
                  </div>
                </div>
              </div>

              <div
                  v-if="getTemplateViewMode === TEMPLATE_VIEW_MODE.TEMPLATES"
                  class="list-group list-group-flush overflow-hidden select-action-group mt-2">
                <div
                    v-for="(template, index) of getTemplates"
                    :key="index"
                    @click="onTemplateSelection(template)"
                    class="list-group-item p-2 pr-4 rounded list-group-item-action border-0 on-hover media">
                  <div class="media-body overflow-hidden">
                    <div class="text-truncate">{{ template.name }}</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </perfect-scrollbar>
  </div>
</template>
<script>
import { SET_MESSAGE_TEXT, TOGGLE_QUICK_CHAT_TEXT_SELECTOR } from "@/store/modules/conversations";
import { mapGetters } from "vuex";
import { SET_SELECTED_TEMPLATE, SET_SELECTED_TEMPLATE_VIEW_MODE, TEMPLATE_VIEW_MODE } from "@/store/modules/template";


export default {
  data() {
    return {
      TEMPLATE_VIEW_MODE
    };
  },
  methods: {
    onTab(view) {
      console.log(this.getTemplates);
      this.$store.commit(SET_SELECTED_TEMPLATE_VIEW_MODE, view);
    },
    onTextSelection(text) {
      this.$store.commit(SET_MESSAGE_TEXT, text);
      this.$store.commit(TOGGLE_QUICK_CHAT_TEXT_SELECTOR);
    },
    onTemplateSelection(template) {
      this.$store.commit(SET_SELECTED_TEMPLATE, template);
      this.$store.commit(SET_SELECTED_TEMPLATE_VIEW_MODE, TEMPLATE_VIEW_MODE.TEMPLATE_VIEW);
    },
    onToggleTemplatesAndQuickMessages() {
      this.$store.commit(TOGGLE_QUICK_CHAT_TEXT_SELECTOR);
    }
  },
  computed: {
    ...mapGetters([
      "getQuickMessages",
      "getTemplates",
      "getTemplateViewMode"
    ])
  }
};
</script>
