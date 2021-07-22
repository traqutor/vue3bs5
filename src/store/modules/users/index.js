import Mutations from "./mutations";
import Getters from "./getters";
import Actions from "./actions";

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
