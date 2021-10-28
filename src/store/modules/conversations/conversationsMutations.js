import { CONVERSATION_VIEW_MODES } from "@/const";
import { Mutations } from "@/store/enums/EnumTypes";
import { guidsAreEqual } from "@/services/guids.service";

export default {
  [Mutations.setConversations]: (state, conversations) => {
    state.conversations = conversations;
  },

  [Mutations.setConversation]: (state, conversation) => {
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

  [Mutations.setSelectedConversationId]: (state, conversationId) => {
    state.selectedConversationId = conversationId;
  },

  [Mutations.setIsConversationsLoading]: (state, flag) => {
    state.isConversationsLoading = flag;
  },

  [Mutations.setIsConversationCreating]: (state, flag) => {
    state.isConversationCreating = flag;
  },

  [Mutations.setPageOfConversations]: (state, page) => {
    state.pageOfConversations = page;
  },

  [Mutations.setChatViewMode]: (state, flag) => {
    state.chatViewMode = flag;
  },

  [Mutations.setConversationViewMode]: (state, mode) => {
    if (mode) {
      state.conversationViewMode = mode;
    } else {
      state.conversationViewMode =
        state.conversationViewMode === CONVERSATION_VIEW_MODES.VIEW
          ? CONVERSATION_VIEW_MODES.NEW
          : CONVERSATION_VIEW_MODES.VIEW;
    }
  },

  [Mutations.setSelectedCreator]: (state, creator) => {
    state.selectedCreator = creator;
  },

  [Mutations.setConversationTopic]: (state, topic) => {
    state.conversationTopic = topic;
  },

  [Mutations.setMessageText]: (state, messageText) => {
    state.messageText = messageText;
  },

  [Mutations.setIsMessagesLoading]: (state, flag) => {
    state.isMessagesLoading = flag;
  },

  [Mutations.setIsMessageCreating]: (state, flag) => {
    state.isMessageCreating = flag;
  },

  [Mutations.setMessages]: (state, messages) => {
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

  [Mutations.setSelectedMessageId]: (state, messageId) => {
    state.selectedMessageId = messageId;
  },

  [Mutations.purgeUserIsTyping]: (state, whoIsTyping) => {
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

  [Mutations.toggleQuickChatTextSelector]: (state) => {
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
