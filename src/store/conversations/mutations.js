import { CONVERSATION_VIEW_MODES } from "@/const";
import { guidsAreEqual } from "@/services/guids.service";

export default {
  setConversations: (state, conversations) => {
    state.conversations = conversations;
  },
  setConversation: (state, conversation) => {
    const conversations = [...state.conversations];
    const idx = conversations.findIndex((conv) =>
      guidsAreEqual(conv.id, conversation.id)
    );
    conversations[idx] = conversation;
    state.conversations = [...conversations];
  },
  setSelectedConversationId: (state, conversationId) => {
    state.selectedConversationId = conversationId;
  },
  setIsConversationsLoading: (state, flag) => {
    state.isConversationsLoading = flag;
  },
  setIsConversationCreating: (state, flag) => {
    state.isConversationCreating = flag;
  },
  setPageOfConversations: (state, page) => {
    state.pageOfConversations = page;
  },
  setChatViewMode: (state, flag) => {
    state.chatViewMode = flag;
  },
  setConversationViewMode: (state, mode) => {
    if (mode) {
      state.conversationViewMode = mode;
    } else {
      state.conversationViewMode =
        state.conversationViewMode === CONVERSATION_VIEW_MODES.VIEW
          ? CONVERSATION_VIEW_MODES.NEW
          : CONVERSATION_VIEW_MODES.VIEW;
    }
  },
  setSelectedCreator: (state, creator) => {
    state.selectedCreator = creator;
  },
  setConversationTopic: (state, topic) => {
    state.conversationTopic = topic;
  },
  setMessageText: (state, messageText) => {
    state.messageText = messageText;
  },
  setIsMessagesLoading: (state, flag) => {
    state.isMessagesLoading = flag;
  },
  setIsMessageCreating: (state, flag) => {
    state.isMessageCreating = flag;
  },
  setMessages: (state, messages) => {
    if (messages.length > 0) {
      const conversationId = messages[0].conversationId;
      const conversations = [...state.conversations];
      const idx = conversations.findIndex((cnv) =>
        guidsAreEqual(cnv.id, conversationId)
      );
      conversations[idx].messages = [...messages];

      state.conversations = [...conversations];
    }
  },
  setSelectedMessageId: (state, messageId) => {
    state.selectedMessageId = messageId;
  },

  purgeUserIsTyping: (state, whoIsTyping) => {
    const idx = state.conversations.findIndex((c) => {
      return guidsAreEqual(c.id, whoIsTyping.conversationId);
    });

    const tmpConversation = { ...state.conversations[idx] };
    if (!tmpConversation.typingUsers) return;

    const typingUsers = tmpConversation.typingUsers.filter(
      (usr) => usr.userId !== whoIsTyping.userId
    );

    const tmp = state.conversations.map((conv) =>
      conv.id !== tmpConversation.id
        ? conv
        : { ...tmpConversation, typingUsers: typingUsers }
    );

    state.conversations = [...tmp];
  },
};
