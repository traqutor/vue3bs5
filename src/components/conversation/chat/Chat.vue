<template>
  <div class="flex-fill position-relative">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="flex-section-slide flex-fill mt-2">
        <chat-body></chat-body>
        <chat-drawer></chat-drawer>
      </div>
      <chat-footer-user-is-typing></chat-footer-user-is-typing>
      <chat-footer-acknowledge></chat-footer-acknowledge>
      <chat-footer-whisper></chat-footer-whisper>
      <chat-footer-input></chat-footer-input>
    </div>
  </div>
</template>
<script>
import ChatFooterInput from "@/components/conversation/chat/input/ChatFooterInput";
import ChatFooterWhisper from "@/components/conversation/chat/input/ChatFooterWhisper";
import ChatFooterAcknowledge from "@/components/conversation/chat/input/ChatFooterAcknowledge";
import ChatBody from "@/components/conversation/chat/ChatBody";
import ChatDrawer from "@/components/conversation/chat/ChatDrawer";
import ChatFooterUserIsTyping from "@/components/conversation/chat/input/ChatFooterUserIsTyping";
export default {
  components: {
    ChatFooterUserIsTyping,
    ChatDrawer,
    ChatBody,
    ChatFooterAcknowledge,
    ChatFooterWhisper,
    ChatFooterInput,
  },
};
</script>
