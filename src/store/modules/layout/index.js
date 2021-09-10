import Mutations from "./layoutMutations.js";
import Actions from "./layoutActions.js";
import Getters from "./layoutGetters.js";

import { VISIBILITIES } from "@/const";

const layoutModule = {
  state() {
    return {
      asideLeftVisibility: VISIBILITIES.SET,
      asideRightVisibility: VISIBILITIES.SET,
    };
  },

  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default layoutModule;
