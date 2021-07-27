import { guidsAreEqual } from "@/services/guids.service";
import { computed } from "vue";

export default {
  getChatViewMode: (state) => {
    return state.chatViewMode;
  },
  getConversationViewMode: (state) => {
    return state.conversationViewMode;
  },
  getConversations: (state) => {
    return state.conversations;
  },
  getIsConversationsLoading: (state) => {
    return state.isConversationsLoading;
  },
  getIsConversationCreating: (state) => {
    return state.isConversationCreating;
  },
  getSelectedConversationId: (state) => {
    return state.selectedConversationId;
  },
  getSelectedConversation: (state, getters) => {
    return state.conversations.find(
      (conv) => conv.id === getters.getSelectedConversationId
    );
  },
  getMessages: (state, getters) => {
    return getters.getSelectedConversation.messages;
  },
  getIsMessagesLoading: (state) => {
    return state.isMessagesLoading;
  },
  getSelectedMessageId: (state) => {
    return state.selectedMessageId;
  },
  getSelectedMessage: (state, getters) => {
    if (getters.getMessages && getters.getSelectedMessageId) {
      return getters.getMessages.find(
        (msg) => msg.id === getters.getSelectedMessageId
      );
    }
  },
  getSelectedCreator: (state) => {
    return state.selectedCreator;
  },
  getConversationTopic: (state) => {
    return state.conversationTopic;
  },
  getMessageText: (state) => {
    return state.messageText;
  },
  getConversationAvailableCreationRoles: (state, getters) => {
    if (state.selectedConversationId) {
      const idx = state.conversations.findIndex((conv) =>
        guidsAreEqual(conv.id, state.selectedConversationId)
      );
      return state.conversations[idx].participants
        .filter(
          (prt) =>
            guidsAreEqual(prt.id, getters.getLoggedUser.id) ||
            getters.getLoggedUser.SystemRoles.some((role) => {
              return guidsAreEqual(role.Id, prt.id);
            })
        )
        .map((participant) => getters.getParticipantById(participant.id));
    }
  },
  getIsQuickChatTextSelectorVisible: (state) => {
    return state.isQuickChatTextSelectorVisible;
  },

  getIsMessageAcknowledged: (state, getters) => (message) => {
    return (
      message.acknowledgedByUsers &&
      message.acknowledgedByUsers.find(
        (ack) =>
          (getters.getLoggedUser &&
            guidsAreEqual(ack.id, getters.getLoggedUser.id)) ||
          getters.getLoggedUser.SystemRoles.find((role) =>
            guidsAreEqual(ack.id, role.Id)
          )
      )
    );
  },

  getMessagesToAcknowledge: (state, getters) => {
    return getters.getSelectedConversation.messages.filter(
      (message) =>
        message.authorId !== getters.getLoggedUser.id &&
        getters.getLoggedUser.SystemRoles.find(
          (role) => role.Id === message.activeRoleId
        ) &&
        message.requiresAcknowledgement &&
        !getters.getIsMessageAcknowledged(message)
    );
  },
};
