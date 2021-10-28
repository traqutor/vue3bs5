<template>
  <div class="d-flex align-items-center mb-2 pe-3">
    <div class="input-group input-group-sm filter-control-group flex-grow-1">
      <input
        type="text"
        class="form-control is-filter-control bg-light shadow-none"
        id="chat_filter"
        placeholder="Search"
      />
      <div class="input-group-append">
        <button
          class="
            btn btn-light
            border-left-0
            text-secondary text-dark-hover
            btn-filter-control
            shadow-none
          "
          type="button"
        >
          <feather-search></feather-search>
        </button>
      </div>
    </div>

    <div class="ms-3">
      <a
        class="
          btn btn-sm btn-primary
          rounded
          nav-filter-control
          checklist-group-control
          shadow-none
        "
        @click="onChangeConversationViewMode"
      >
        <feather-plus />
      </a>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/EnumTypes";
import { CONVERSATION_VIEW_MODES } from "@/const";
import FeatherPlus from "@/icons/FeatherPlus";
import FeatherSearch from "@/icons/FeatherSearch";

export default {
  setup() {
    const store = useStore();
    const conversationViewModes = CONVERSATION_VIEW_MODES;

    function onChangeConversationViewMode() {
      store.commit(
        Mutations.setConversationViewMode,
        conversationViewModes.NEW
      );
    }

    return {
      conversationViewModes,
      onChangeConversationViewMode,
    };
  },
  components: { FeatherSearch, FeatherPlus },
};
</script>
