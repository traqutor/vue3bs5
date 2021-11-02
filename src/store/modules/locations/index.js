import Getters from "./locationsGetters";
import Mutations from "./locationsMutations";
import Actions from "./locationsActions";

export const initialState = () => ({
  locations: [],
});

const locationsModule = {
  state: initialState(),
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default locationsModule;
