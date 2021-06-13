import usersMutations from './mutations';
import usersGetters from './getters';
import usersActions from './actions';

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
      textToSearchParticipants: '',
      isLoadingUsers: false,
    };
  },
  mutations: usersMutations,
  getters: usersGetters,
  actions: usersActions,
};

export default usersModule;
