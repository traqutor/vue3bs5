import Getters from "./locationsGetters";
import Mutations from "./locationsMutations";
import Actions from "./locationsActions";

const locationsModule = {
  state() {
    return {
      locations: [],
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default locationsModule;
