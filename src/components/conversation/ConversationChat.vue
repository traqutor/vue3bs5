<template>
  <div v-if="conversation" class="flex-fill d-flex flex-column steps-section">
    <chat v-show="chatViewMode === chatViewModes.VIEW"></chat>
    <chat-info v-if="chatViewMode === chatViewModes.INFO"></chat-info>
    <chat-whisper v-if="chatViewMode === chatViewModes.WHISPER"></chat-whisper>
    <chat-add-participants
      v-if="chatViewMode === chatViewModes.ADD_PARTICIPANTS"
    ></chat-add-participants>
    <chat-message v-if="chatViewMode === chatViewModes.MESSAGE"></chat-message>
  </div>
</template>
<script>
import Chat from "@/components/conversation/chat/Chat";
import { useStore } from "vuex";
import { CHAT_VIEW_MODES } from "@/const";
import { computed } from "vue";
import ChatInfo from "@/components/conversation/chat/ChatInfo";
import ChatWhisper from "@/components/conversation/chat/ChatWhisper";
import ChatAddParticipants from "@/components/conversation/chat/ChatAddParticipants";
import ChatMessage from "@/components/conversation/chat/ChatMessage";

export default {
  setup() {
    const store = useStore();
    const chatViewModes = CHAT_VIEW_MODES;
    const chatViewMode = computed(() => store.getters.getChatViewMode);
    const conversation = computed(() => store.getters.getSelectedConversation);
    return {
      conversation,
      chatViewMode,
      chatViewModes,
    };
  },
  components: { ChatMessage, ChatAddParticipants, ChatWhisper, ChatInfo, Chat },
};
</script>
