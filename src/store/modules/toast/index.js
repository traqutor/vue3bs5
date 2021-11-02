import Getters from "./toastGetters";
import Mutations from "./toastMutations";
import Actions from "./toastActions";

export const initialState = () => ({
  notifications: [],
});

const toastModule = {
  state: initialState(),
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default toastModule;
