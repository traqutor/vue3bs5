import conversationsMutations from "./mutations";
import conversationsActions from "./actions";
import conversationsGetters from "./getters";
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
      messageText: null,
      selectedMessageId: null,
      isMessagesLoading: null,
      isMessageCreating: null,
    };
  },
  mutations: conversationsMutations,
  actions: conversationsActions,
  getters: conversationsGetters,
};

export default conversationsModule;
