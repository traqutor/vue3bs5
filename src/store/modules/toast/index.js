import Getters from "./toastGetters";
import Mutations from "./toastMutations";
import Actions from "./toastActions";

const toastModule = {
  state() {
    return {
      notifications: [],
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default toastModule;
