<template>
  <div class="flex-fill d-flex flex-column">
    <perfect-scrollbar class="d-flex flex-column h-100 w-100 position-absolute">
      <div class="mb-2 d-flex align-items-center pe-4">
        <div class="overflow-hidden me-auto">
          <div class="text-truncate f-size-16 font-weight-middle">
            Templates and Quick messages
          </div>
        </div>

        <div class="d-flex align-items-center me-4">
          <button
            class="btn btn-sm btn-secondary-light shadow-none"
            @click="onToggleTemplatesAndQuickMessages()"
          >
            <FeatherX />
          </button>
        </div>
      </div>

      <nav class="side-nav-line">
        <div
          class="nav nav-tabs border-bottom border-secondary-light"
          style="min-height: 38px"
        >
          <a
            class="nav-item nav-link"
            :active="getTemplateViewMode === TEMPLATE_VIEW_MODES.QUICK_MESSAGE"
            @click="onTab(TEMPLATE_VIEW_MODES.QUICK_MESSAGE)"
            >Quick messages<span class="badge badge-pill ms-2 badge-primary">{{
              getQuickMessages.length
            }}</span></a
          >

          <a
            class="nav-item nav-link"
            :active="getTemplateViewMode === TEMPLATE_VIEW_MODES.TEMPLATES"
            @click="onTab(TEMPLATE_VIEW_MODES.TEMPLATES)"
            >Templates<span class="badge badge-pill ms-2 badge-secondary"
              >1</span
            ></a
          >

          <div class="btn-toolbar ms-auto me-5">
            <div class="btn-group">
              <a class="btn btn-link text-decoration-none ps-3 nav-link">
                <FeatherPlus class="f-icon-26" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="d-flex flex-column flex-fill pt-1">
        <div class="flex-fill position-relative">
          <div class="d-flex flex-column h-100 w-100 position-absolute">
            <div class="ps-scrollbar ps-scrollbar-hidden ps">
              <div
                v-if="getTemplateViewMode === TEMPLATE_VIEW_MODES.QUICK_MESSAGE"
                class="
                  list-group list-group-flush
                  overflow-hidden
                  select-action-group
                  mt-2
                "
              >
                <div
                  v-for="(message, index) of getQuickMessages"
                  :key="index"
                  @click="onTextSelection(message)"
                  class="
                    list-group-item
                    p-2
                    pe-4
                    rounded
                    list-group-item-action
                    border-0
                    on-hover
                    media
                  "
                >
                  <div class="media-body overflow-hidden">
                    <div class="text-truncate">{{ message }}</div>
                  </div>
                </div>
              </div>

              <div
                v-if="getTemplateViewMode === TEMPLATE_VIEW_MODES.TEMPLATES"
                class="
                  list-group list-group-flush
                  overflow-hidden
                  select-action-group
                  mt-2
                "
              >
                <div
                  v-for="(template, index) of getTemplates"
                  :key="index"
                  @click="onTemplateSelection(template)"
                  class="
                    list-group-item
                    p-2
                    pe-4
                    rounded
                    list-group-item-action
                    border-0
                    on-hover
                    media
                  "
                >
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
import { mapGetters } from "vuex";
import { Mutations, TEMPLATE_VIEW_MODES } from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";
import FeatherPlus from "@/icons/FeatherPlus";

export default {
  components: { FeatherPlus, FeatherX },
  data() {
    return {
      TEMPLATE_VIEW_MODES,
    };
  },
  methods: {
    onTab(view) {
      console.log(this.getTemplates);
      this.$store.commit(Mutations.setSelectedTemplateViewMode, view);
    },
    onTextSelection(text) {
      this.$store.commit(Mutations.setMessageText, text);
      this.$store.commit("toggleQuickChatTextSelector");
    },
    onTemplateSelection(template) {
      this.$store.commit(Mutations.setSelectedTemplate, template);
      this.$store.commit(
        Mutations.setSelectedTemplateViewMode,
        TEMPLATE_VIEW_MODES.TEMPLATE_VIEW
      );
    },
    onToggleTemplatesAndQuickMessages() {
      this.$store.commit("toggleQuickChatTextSelector");
    },
  },
  computed: {
    ...mapGetters(["getQuickMessages", "getTemplates", "getTemplateViewMode"]),
  },
};
</script>
