<template>
  <div
    class="step-tabpanel flex-fill position-relative active show"
    id="dialog-content-section-4"
    style="display: block"
  >
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="d-flex align-items-center text-secondary f-size-15 pt-3">
        Add participants<span class="ml-2"></span>
      </div>
      <div
        class="
          chat-section-body
          d-flex
          flex-column flex-fill
          pt-2
          mb-3
          position-relative
        "
      >
        <div
          class="
            d-flex
            flex-column
            position-absolute
            w-100
            h-100
            overflow-hidden
          "
        >
          <div class="ps-scrollbar pr-3 ps">
            <perfect-scrollbar
              class="
                list-group list-group-flush
                overflow-hidden
                select-action-group
              "
            >
              <conversations-participants-list-item
                v-for="participant of selectedParticipants"
                :key="participant.id"
                :participant-id="participant.id"
                :is-toggle-action="true"
                :is-removable="true"
                :on-select="onSelectParticipant"
              >
              </conversations-participants-list-item>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <button
          @click="onAddSelectedParticipants"
          :disabled="selectedParticipants.length <= 0"
          type="button"
          class="btn btn-sm btn-primary btn-block shadow-none"
        >
          Add to Conversation
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";
import { useStore } from "vuex";
import { computed } from "vue";
import { CONVERSATION_VIEW_MODES } from "@/const";

export default {
  setup() {
    const conversationViewModes = CONVERSATION_VIEW_MODES;
    const store = useStore();
    const conversation = computed(() => store.getters.getSelectedConversation);
    const selectedParticipants = computed(
      () => store.getters.getSelectedParticipants
    );

    function onSelectParticipant(participantId) {
      store.dispatch("setToggleParticipantSelected", participantId);
    }

    function onAddSelectedParticipants() {
      if (conversation.value.isDirect) {
        conversation.value.participants.forEach((participant) => {
          store.dispatch("setToggleParticipantSelected", participant.id);
        });
        store.commit("setConversationViewMode", conversationViewModes.NEW);
      } else {
        console.log("add part");
        store.dispatch("onAddUsersToConversation");
      }
    }

    return {
      selectedParticipants,
      onAddSelectedParticipants,
      onSelectParticipant,
    };
  },
  components: { ConversationsParticipantsListItem },
};
</script>
