import Mutations from "./authMutations";
import Actions from "./authActions";
import Getters from "./authGetters";

export const initialState = () => ({
  isLoadingLogin: false,
  user: null,
  activeRole: null,
  errors: null,
});

const authModule = {
  state: initialState(),
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default authModule;
