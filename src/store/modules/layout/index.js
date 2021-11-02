import Mutations from "./layoutMutations.js";
import Actions from "./layoutActions.js";
import Getters from "./layoutGetters.js";

export const initialState = () => ({
});

const layoutModule = {
  state: initialState(),

  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default layoutModule;
