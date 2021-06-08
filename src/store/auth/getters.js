export default {
    isLoadingLogin(state) {
        return state.isLoadingLogin;
    },

    isRoleAssignedToLoggedUser: (state, getters, rootState) => roleId => {
        return (
            rootState.auth.user.id === roleId ||
            (rootState.auth.user.SystemRoles &&
                rootState.auth.user.SystemRoles.some(rle => rle.Id === roleId))
        );
    },

    getLoggedUser(state) {
        return state.user;
    },

    getErrors(state) {
        return state.errors;
    }
}
