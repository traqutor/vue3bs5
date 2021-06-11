import {guidsAreEqual} from "@/services/guids.service";

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
        if (getters.selectedConversationId) {
            const idx = state.conversations
                .findIndex(c => guidsAreEqual(c.id, getters.selectedConversationId));
            return state.conversations[idx];
        }
    },
    getMessages: (state, getters) => {
        if (getters.getSelectedConversation) {
            return getters.getSelectedConversation.messages;
        }
    },
    getSelectedMessageId: (state) => {
        return state.selectedMessageId;
    },
    getSelectedMessage: (state, getters) => {
        if (getters.getMessages && getters.getSelectedMessageId) {
            return getters.getMessages.find(msg => msg.id === getters.getSelectedMessageId);
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
            const idx = state.conversations
                .findIndex(conv => guidsAreEqual(conv.id, state.selectedConversationId));
            return state.conversations[idx].participants
                .filter(
                    (prt) =>
                        guidsAreEqual(prt.id, getters.getLoggedUser.id) ||
                        getters.getLoggedUser.SystemRoles.some((role) => {
                            return guidsAreEqual(role.Id, prt.id);
                        }))
                .map((participant) => getters.getParticipantById(participant.id));
        }
    },

}
