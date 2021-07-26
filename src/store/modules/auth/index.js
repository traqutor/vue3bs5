import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";

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
