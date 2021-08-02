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
};
