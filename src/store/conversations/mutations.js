import {CONVERSATION_VIEW_MODES} from "@/const";

export default {
    setConversations: (state, conversations) => {
        state.conversations = conversations;
    },
    setLoadingConversations: (state, flag) => {
        state.isLoadingConversations = flag;
    },
    setPageOfConversations: (state, page) => {
        state.pageOfConversations = page;
    },
    setChatViewMode: (state, flag) => {
        state.chatViewMode = flag;
    },
    setConversationViewMode: (state, mode) => {
        if (mode) {
            state.conversationViewMode = mode
        } else {
            state.conversationViewMode =
                state.conversationViewMode === CONVERSATION_VIEW_MODES.VIEW
                ? CONVERSATION_VIEW_MODES.NEW
                : CONVERSATION_VIEW_MODES.VIEW;
        }
    },
}
