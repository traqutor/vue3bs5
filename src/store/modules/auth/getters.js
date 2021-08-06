export default {
  isLoadingLogin(state) {
    return state.isLoadingLogin;
  },

  getLoggedUser(state) {
    return state.user;
  },

  getErrors(state) {
    return state.errors;
  },

  getLoggedUserActiveRole(state) {
    return state.activeRole;
  },

  getIsLoggedUserMessageAuthor: (state) => (message) => {
    return (
      message.authorId === state.user.id ||
      (message.activeRoleId &&
        state.user.SystemRoles((role) => role.Id === message.activeRoleId))
    );
  },

  getIsLoggedUserParticipant: (state) => (participant) => {
    return (
      participant.id === state.user.id ||
      (participant.isRole &&
        state.user.SystemRoles((role) => role.Id === participant.id))
    );
  },
};
