import Mutations from "./authMutations";
import Actions from "./authActions";
import Getters from "./authGetters";

const authModule = {
  state() {
    return {
      isLoadingLogin: false,
      user: null,
      activeRole: null,
      errors: null,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default authModule;
