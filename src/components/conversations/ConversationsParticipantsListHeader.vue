<template>
  <div class="d-flex align-items-center mb-2 pr-3">
    <div class="input-group input-group-sm filter-control-group flex-grow-1">
      <input
          v-model="textToSearchParticipants"
          type="text"
          class="form-control is-filter-control bg-light shadow-none"
          placeholder="Search">
      <div class="input-group-append">
        <button class="btn btn-light border-left-0 text-secondary text-dark-hover btn-filter-control" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
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

export default {
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
      this.$store.commit("setConversationViewMode", this.conversationViewModes.VIEW);
    }

  },
}
</script>
