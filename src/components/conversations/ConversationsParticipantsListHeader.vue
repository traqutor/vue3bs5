<template>
  <div class="d-flex align-items-center mb-2 pr-3">
    <div class="input-group input-group-sm filter-control-group flex-grow-1">
      <input
          v-model="textToSearchParticipants"
          type="text"
          class="form-control is-filter-control bg-light shadow-none"
          placeholder="Search">
      <div class="input-group-append">
        <button
            v-if="textToSearchParticipants"
            @click="textToSearchParticipants = ''"
            class="btn btn-light border-left-0 text-secondary text-dark-hover btn-filter-control"
            type="button">
          <feather-x></feather-x>
        </button>
        <button v-else class="btn btn-light border-left-0 text-secondary text-dark-hover btn-filter-control"
                type="button">
          <feather-search></feather-search>
        </button>
      </div>
    </div>

    <div class="ms-3">
      <a class="btn btn-sm btn-secondary rounded nav-filter-control checklist-group-control shadow-none"
         @click="onChangeConversationViewMode"
      >
        Cancel
      </a>
    </div>
  </div>

</template>
<script>

import {CONVERSATION_VIEW_MODES} from "@/const";
import FeatherSearch from "@/icons/FeatherSearch";
import FeatherX from "@/icons/FeatherX";

export default {
  components: {FeatherX, FeatherSearch},
  data() {
    return {
      conversationViewModes: CONVERSATION_VIEW_MODES,
    }
  },
  computed: {
    textToSearchParticipants: {
      get() {
        return this.$store.getters.getTextToSearchParticipants;
      },
      set(value) {
        this.$store.commit("setParticipantsSearchText", value);
      }
    }
  },
  methods: {
    onChangeConversationViewMode() {
      this.$store.commit("setParticipantsSearchText", "");
      this.$store.commit("purgeSelectedParticipants");
      this.$store.commit("setConversationViewMode", this.conversationViewModes.VIEW);
    }
  },
}
</script>
