import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";

const settingsModule = {
  state() {
    return {};
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default settingsModule;
