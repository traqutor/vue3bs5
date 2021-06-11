<template>
  <div class="col d-flex flex-column ps-4 border-left border-secondary-light steps-section overflow-hidden">
    <div class="flex-fill chat-section-content position-relative">
      <div class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden">
        <conversation-header></conversation-header>
        <conversation-chat></conversation-chat>
      </div>
    </div>
  </div>
</template>
<script>
import ConversationHeader from "@/components/conversation/ConversationHeader";
import ConversationChat from "@/components/conversation/ConversationChat";

export default {
  components: {ConversationChat, ConversationHeader}
}
</script>
