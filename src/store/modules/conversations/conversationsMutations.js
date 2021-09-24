import { CONVERSATION_VIEW_MODES } from "@/const";
import { guidsAreEqual } from "@/services/guids.service";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  setConversations: (state, conversations) => {
    state.conversations = conversations;
  },
  setConversation: (state, conversation) => {
    const conversations = [...state.conversations];
    const idx = conversations.findIndex((conv) =>
      guidsAreEqual(conv.id, conversation.id)
    );
    if (idx !== -1) {
      const cutOut = conversations.splice(idx, 1)[0];
      conversations.splice(0, 0, cutOut);
    } else {
      conversations.unshift(conversation);
    }
    state.conversations = [...conversations];
  },
  setSelectedConversationId: (state, conversationId) => {
    state.selectedConversationId = conversationId;
  },
  [Mutations.setIsConversationsLoading]: (state, flag) => {
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

  toggleQuickChatTextSelector: (state) => {
    state.isQuickChatTextSelectorVisible =
      !state.isQuickChatTextSelectorVisible;
  },

  [Mutations.setMessage]: (state, message) => {
    const cIdx = state.conversations.findIndex(
      (conv) => conv.id === message.conversationId
    );
    if (cIdx !== -1) {
      const mIdx = state.conversations[cIdx].messages.findIndex(
        (msg) => msg.id === message.id
      );
      if (mIdx !== -1) {
        state.conversations[cIdx].messages[mIdx] = message;
      }
    }
  },

  [Mutations.setReplyMessage]: (state, message) => {
    state.replyMessage = message;
  },
  [Mutations.setTotalMissedCounter]: (state, counter) => {
    state.totalMissedCounter = counter;
  },
};
