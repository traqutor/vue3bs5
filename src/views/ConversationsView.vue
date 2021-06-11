<template>
  <div class="row section-widget position-relative flex-fill mt-2">
    <conversations
        v-if="conversationViewMode === conversationViewModes.VIEW &&
        chatViewMode !== chatViewModes.ADD_PARTICIPANTS"
    ></conversations>
    <conversations-participants v-else></conversations-participants>

    <conversation v-if="conversationViewMode === conversationViewModes.VIEW"></conversation>
    <conversation-new v-else></conversation-new>
  </div>
</template>
<script>
import {computed} from "vue";
import {useStore} from "vuex";
import Conversations from "@/components/conversations/Conversations";
import ConversationsParticipants from "@/components/conversations/ConversationsParticipants";
import {CHAT_VIEW_MODES, CONVERSATION_VIEW_MODES} from "@/const"
import Conversation from "@/components/conversation/Conversation";
import ConversationNew from "@/components/conversation/ConversationNew";
export default {
  setup() {
    const store = useStore();
    const chatViewModes = CHAT_VIEW_MODES;
    const conversationViewModes = CONVERSATION_VIEW_MODES;
    const chatViewMode = computed(() => store.getters.getChatViewMode);
    const conversationViewMode = computed(() => store.getters.getConversationViewMode);


    return {
      chatViewMode,
      chatViewModes,
      conversationViewMode,
      conversationViewModes,
    }
  },
  components: { ConversationNew, Conversation, ConversationsParticipants, Conversations}
}
</script>
