import Mutations from "./settingsMutations";
import Actions from "./settingsActions";
import Getters from "./settingsGetters";

const settingsModule = {
  state() {
    return {};
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default settingsModule;
