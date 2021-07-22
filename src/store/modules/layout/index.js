import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

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
