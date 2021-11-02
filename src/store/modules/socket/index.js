import Mutations from "./socketMutations";
import Actions from "./socketActions";
import Getters from "./socketGetters";

export const initialState = () => ({
  hubConnection: null,
  isSocketOnline: navigator.onLine,
  isSocketReconnecting: false,
  mapOfTypingUsers: {},
});

const socketModule = {
  state: initialState(),

  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default socketModule;
