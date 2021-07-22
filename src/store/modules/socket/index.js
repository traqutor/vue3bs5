import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";

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
