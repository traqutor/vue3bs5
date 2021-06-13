import socketMutations from './mutations';
import actionsMutations from './actions';
import gettersMutations from './getters';

const socketModule = {
  state() {
    return {
      hubConnection: null,
      mapOfTypingUsers: {},
    };
  },
  mutations: socketMutations,
  actions: actionsMutations,
  getters: gettersMutations,
};

export default socketModule;
