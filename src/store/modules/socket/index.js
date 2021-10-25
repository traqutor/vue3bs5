import Mutations from "./socketMutations";
import Actions from "./socketActions";
import Getters from "./socketGetters";

const socketModule = {
  state() {
    return {
      hubConnection: null,
      isSocketOnline: navigator.onLine,
      isSocketReconnecting: false,
      mapOfTypingUsers: {},
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default socketModule;
