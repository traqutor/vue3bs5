<template>
  <div
    v-if="conversation"
    class="
      chat-section-header
      d-flex
      justify-content-between
      align-items-center
      pb-2
      border-bottom border-secondary-light
      hover-action-group
    "
  >
    <div
      @click="onConversationModeSelect(chatViewModes.INFO)"
      class="d-flex align-items-center overflow-hidden on-hover"
    >
      <participant-avatar
        v-if="conversation.isDirect && getDirectParticipant(conversation)"
        class="avatar-xm me-3"
        :participant-id="getDirectParticipant(conversation).id"
      />

      <figure v-else class="avatar avatar-xm me-3">
        <feather-user-group class="f-icon-24"></feather-user-group>
      </figure>

      <div
        v-if="conversation.isDirect"
        class="media-body overflow-hidden ml-n1"
      >
        <div class="text-truncate h6 mb-1 text-dark">
          {{ getParticipantById(getDirectParticipant(conversation).id).name }}
        </div>
      </div>

      <div v-else class="media-body overflow-hidden ml-n1">
        <div class="text-truncate h6 mb-1 text-dark">
          {{ conversation.topic }}
        </div>
        <div class="text-truncate text-secondary">
          {{ conversation.participants.length }} participants
        </div>
      </div>
    </div>

    <div class="steps-section ml-auto">
      <div v-if="chatViewMode === chatViewModes.VIEW">
        <div class="d-flex align-items-center">
          <div
            v-if="!conversation.isDirect"
            class="avatar-group avatar-group-move me-2"
          >
            <a
              v-for="participant of conversation.participants.slice(0, 4)"
              :key="participant.id"
              href="#"
              class="avatar dropdown"
              :data-initial="
                getParticipantById(participant.id).name.substring(0, 1)
              "
            >
              <div class="avatar-img"></div>
              <i class="avatar-presence online"></i>
            </a>

            <a
              v-if="conversation.participants.length > 4"
              @click="onConversationModeSelect(chatViewModes.INFO)"
              class="avatar btn bg-primary"
            >
              <small>+{{ conversation.participants.length - 4 }}</small>
            </a>
          </div>

          <div
            class="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <a
              v-if="!conversation.isDirect"
              @click="onConversationModeSelect(chatViewModes.WHISPER)"
              class="
                btn
                text-secondary text-dark-hover
                border-0
                px-2
                shadow-none
                rounded
              "
              data-bs-toggle="tooltip"
              title="Whisper to someone"
            >
              <feather-whisper-message class="f-icon-22" />
            </a>

            <a
              @click="onConversationModeSelect(chatViewModes.ADD_PARTICIPANTS)"
              class="
                btn
                text-secondary text-dark-hover
                border-0
                px-2
                shadow-none
                rounded
              "
            >
              <feather-user-plus class="f-icon-22" />
            </a>

            <a
              @click="onConversationModeSelect(chatViewModes.INFO)"
              class="
                btn
                text-secondary text-dark-hover
                border-0
                px-2
                shadow-none
                rounded
              "
              data-outside="true"
            >
              <feather-info class="f-icon-22" />
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <a
          @click="onConversationModeSelect(chatViewModes.VIEW)"
          class="btn btn-sm btn-secondary-light shadow-none border-0 rounded"
        >
          <feather-chevrons-left />
          Back</a
        >
      </div>
    </div>
  </div>
  <div
    v-else
    class="
      chat-section-header
      d-flex
      justify-content-between
      align-items-center
      pb-2
      border-bottom border-secondary-light
      hover-action-group
    "
  >
    <div class="d-flex align-items-center overflow-hidden on-hover">
      <div class="media-body overflow-hidden ml-n1">
        <div class="text-truncate h6 mb-1 text-dark">Select conversation</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import FeatherChevronsLeft from "@/icons/FeatherChevronsLeft";
import FeatherInfo from "@/icons/FeatherInfo";
import FeatherUserPlus from "@/icons/FeatherUserPlus";
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import { CHAT_VIEW_MODES } from "@/const";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
import FeatherUserGroup from "@/icons/FeatherUserGroup";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  setup() {
    const store = useStore();
    const chatViewModes = CHAT_VIEW_MODES;
    const chatViewMode = computed(() => store.getters.getChatViewMode);
    const conversation = computed(() => store.getters.getSelectedConversation);
    const getParticipantById = computed(() => store.getters.getParticipantById);
    const getDirectParticipant = computed(
      () => store.getters.getDirectParticipant
    );

    function onConversationModeSelect(mode) {
      if (mode === chatViewModes.VIEW) {
        store.commit(Mutations.purgeWhisperParticipants);
        store.commit(Mutations.purgeSelectedParticipants);
      }
      store.commit(Mutations.setChatViewMode, mode);
    }

    return {
      conversation,
      chatViewMode,
      onConversationModeSelect,
      chatViewModes,
      getParticipantById,
      getDirectParticipant,
    };
  },
  components: {
    ParticipantAvatar,
    FeatherUserGroup,
    FeatherWhisperMessage,
    FeatherUserPlus,
    FeatherInfo,
    FeatherChevronsLeft,
  },
};
</script>
