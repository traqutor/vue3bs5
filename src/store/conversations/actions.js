import {axiosWebApiInstance} from "@/services/axios.service";

export default {

    getConversations: (
        {state, commit, rootState},
        {refresh = false, silent = false}
    ) => {
        if (!silent) commit("setLoadingConversations", true);

        let skipConversations = refresh
            ? 0
            : state.pageOfConversations.takeConversations;
        let takeConversations = refresh
            ? 20
            : state.pageOfConversations.takeConversations + 20;

        // silly limiter no more then 100 conversations can be fetched
        takeConversations = takeConversations > 99 ? 99 : takeConversations;

        commit("setPageOfConversations", {skipConversations, takeConversations});
        let activeRoleIds = "";
        rootState.auth.user.SystemRoles.forEach((rle, index) => {
            activeRoleIds =
                activeRoleIds + (index === 0 ? "&activeRoleIds=" : "&") + rle.Id;
        });
        const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetConversations?skip=0&take=${takeConversations}${activeRoleIds}`;

        axiosWebApiInstance
            .get(url)
            .then(function (response) {
                commit("setConversations", response.data.conversations);
                commit("setLoadingConversations", false);
            }).catch(error => {
            console.error("On GET_CONVERSATIONS error:", error);
        });
    },
}
