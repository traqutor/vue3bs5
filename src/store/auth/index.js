import authMutations from './mutations';
import authActions from './actions';
import authGetters from './getters';

const authModule = {
  state() {
    return {
      isLoadingLogin: false,
      user: null,
      errors: null,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};

export default authModule;
