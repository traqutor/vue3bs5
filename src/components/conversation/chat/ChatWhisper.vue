<template>
  <div v-if="conversation" class="flex-fill position-relative pt-2">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="row pt-3 pb-3">
        <div class="col-7 d-flex align-items-center text-secondary f-size-15">
          <span v-if="whisperToParticipants.length <= 0"
            >Whisper to someone</span
          >
          <span v-else-if="whisperToParticipants.length === participants.length"
            >Are you sure you would like to whisper to all conversation
            participants?</span
          >
          <span v-else>
            Whispering to
            <span class="ml-2">
              {{ whisperToParticipants.length }}
            </span></span
          >
        </div>
        <div class="col-5">
          <div class="input-group input-group-sm filter-control-group">
            <input
              type="text"
              class="form-control is-filter-control bg-light shadow-none"
              id="chat_filter"
              placeholder="Search participants"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="
                  btn btn-light
                  text-secondary
                  border-left-0
                  text-dark-hover
                  btn-filter-control
                "
                type="button"
              >
                <feather-search></feather-search>
              </button>
            </div>
          </div>
        </div>
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
          <perfect-scrollbar class="pe-3">
            <conversations-participants-list-item
              v-for="participant of participants"
              :key="participant.id"
              :participant-id="participant.id"
              :is-toggle-action="true"
              :is-active-indicator="true"
              :is-selected="isWhisperParticipantSelected(participant.id)"
              :on-select="(id) => onToggleParticipant(id)"
            >
            </conversations-participants-list-item>
          </perfect-scrollbar>
        </div>
      </div>

      <div
        v-if="whisperToParticipants.length > 0"
        class="d-flex align-items-center border-top whispered-wrapper"
      >
        <div class="me-4 text-secondary">
          Whispering to
          <span class="ml-1">({{ whisperToParticipants.length }})</span>
        </div>
        <perfect-scrollbar class="flex-grow-1">
          <div class="d-flex">
            <participant-thumb-avatar
              v-for="participant of whisperToParticipants"
              :key="participant.id"
              :participant-id="participant.id"
              :is-active-indicator="true"
              @click="onToggleParticipant(participant.id)"
            />
          </div>
        </perfect-scrollbar>
      </div>

      <div class="mb-3">
        <button
          @click="onWhisperButton"
          :disabled="
            whisperToParticipants.length <= 0 ||
            whisperToParticipants.length === participants.length
          "
          class="btn btn-sm btn-primary btn-block"
        >
          Whisper
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { CHAT_VIEW_MODES } from "@/const";
import { useStore } from "vuex";
import { computed } from "vue";
import { guidsAreEqual } from "@/services/guids.service";
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";
import FeatherSearch from "@/icons/FeatherSearch";
import ParticipantThumbAvatar from "@/components/participant/ParticipantThumbAvatar";

export default {
  components: {
    ParticipantThumbAvatar,
    FeatherSearch,
    ConversationsParticipantsListItem,
  },
  setup() {
    const chatViewModes = CHAT_VIEW_MODES;
    const store = useStore();
    const conversation = computed(() => store.getters.getSelectedConversation);
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const participants = computed(() =>
      conversation.value.participants.filter(
        (participant) => !guidsAreEqual(participant.id, loggedUser.value.id)
      )
    );
    const whisperToParticipants = computed(
      () => store.getters.getWhisperToParticipants
    );

    function isWhisperParticipantSelected(participantId) {
      return store.getters.isWhisperParticipantSelected(participantId);
    }

    function onToggleParticipant(participantId) {
      console.log("isWhisperParticipantSelected", participantId);
      store.dispatch("setToggleParticipantToWhisper", participantId);
    }

    function onWhisperButton() {
      store.commit("setChatViewMode", chatViewModes.VIEW);
    }

    return {
      conversation,
      chatViewModes,
      participants,
      onToggleParticipant,
      isWhisperParticipantSelected,
      whisperToParticipants,
      onWhisperButton,
    };
  },
};
</script>
<style>
.whispered-wrapper {
  min-height: 90px;
}
</style>
