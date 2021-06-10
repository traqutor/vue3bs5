import conversationsMutations from "./mutations";
import conversationsActions from "./actions";
import conversationsGetters from "./getters";
import {CHAT_VIEW_MODES, CONVERSATION_VIEW_MODES} from "@/const";

const conversationsModule = {
    state() {
        return {
            conversations: [],
            isLoadingConversations: null,
            pageOfConversations: {skipConversations: 0, takeConversations: 20},
            chatViewMode: CHAT_VIEW_MODES.VIEW,
            conversationViewMode: CONVERSATION_VIEW_MODES.VIEW,
        }
    },
    mutations: conversationsMutations,
    actions: conversationsActions,
    getters: conversationsGetters,
}

export default conversationsModule;
