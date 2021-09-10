import Mutations from "./conversationsMutations";
import Actions from "./conversationsActions";
import Getters from "./conversationsGetters";
import { CHAT_VIEW_MODES, CONVERSATION_VIEW_MODES } from "@/const";

const conversationsModule = {
  state() {
    return {
      conversations: [],
      conversationTopic: null,
      chatViewMode: CHAT_VIEW_MODES.VIEW,
      conversationViewMode: CONVERSATION_VIEW_MODES.VIEW,
      isQuickChatTextSelectorVisible: null,
      isConversationsLoading: null,
      isConversationCreating: null,
      pageOfConversations: { skipConversations: 0, takeConversations: 20 },
      selectedConversationId: null,
      selectedCreator: null,
      messageText: "",
      replyMessage: null,
      totalMissedCounter: 0,
      selectedMessageId: null,
      isMessagesLoading: null,
      isMessageCreating: null,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default conversationsModule;
