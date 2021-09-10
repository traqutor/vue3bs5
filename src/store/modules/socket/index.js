import Mutations from "./socketMutations";
import Actions from "./socketActions";
import Getters from "./socketGetters";

const socketModule = {
  state() {
    return {
      hubConnection: null,
      mapOfTypingUsers: {},
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default socketModule;
