<template>
  <div class="flex-fill position-relative">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="flex-section-slide flex-fill mt-2">
        <chat-body />
        <chat-drawer />
      </div>
      <chat-reply-message />
      <chat-footer-user-is-typing />
      <chat-footer-acknowledge />
      <chat-footer-whisper />
      <chat-footer-attachments />
      <chat-socket-connection-error />
      <chat-footer-input />
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
import ChatFooterAttachments from "@/components/conversation/chat/input/ChatFooterAttachments";
import ChatReplyMessage from "@/components/conversation/chat/input/ChatReplyMessage";
import ChatSocketConnectionError from "@/components/conversation/chat/input/ChatSocketConnectionError";
export default {
  components: {
    ChatSocketConnectionError,
    ChatReplyMessage,
    ChatFooterAttachments,
    ChatFooterUserIsTyping,
    ChatDrawer,
    ChatBody,
    ChatFooterAcknowledge,
    ChatFooterWhisper,
    ChatFooterInput,
  },
};
</script>
