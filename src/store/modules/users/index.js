import Mutations from "./userMutations";
import Getters from "./userGetters";
import Actions from "./userActions";

const usersModule = {
  state() {
    return {
      usersAvatarsMap: [],
      systemUsers: [],
      systemRoles: [],
      selectedParticipants: [],
      whisperToParticipants: [],
      selectedMessageCreator: null,
      pageOfParticipants: 0,
      textToSearchParticipants: "",
      isLoadingUsers: false,
    };
  },
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
};

export default usersModule;
