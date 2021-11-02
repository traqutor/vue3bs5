import Mutations from "./userMutations";
import Getters from "./userGetters";
import Actions from "./userActions";

export const initialState = () => ({
  usersAvatarsMap: [],
  systemUsers: [],
  systemRoles: [],
  selectedParticipants: [],
  whisperToParticipants: [],
  selectedMessageCreator: null,
  textToSearchParticipants: "",
  isLoadingUsers: false,
});

const usersModule = {
  state: initialState(),
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
};

export default usersModule;
