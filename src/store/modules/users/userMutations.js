import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/users";

export default {
  [Mutations.cleanUsersState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setUsers]: (state, users) => {
    state.systemUsers = users;
  },

  [Mutations.setRoles]: (state, roles) => {
    state.systemRoles = roles;
  },

  [Mutations.setParticipantsSearchText]: (state, text) => {
    state.textToSearchParticipants = text;
  },

  [Mutations.setIsLoadingUsers]: (state, flag) => {
    state.isLoadingUsers = flag;
  },

  [Mutations.setSelectedParticipants]: (state, participants) => {
    state.selectedParticipants = participants;
  },

  [Mutations.setWhisperParticipants]: (state, participants) => {
    state.whisperToParticipants = participants;
  },

  [Mutations.purgeSelectedParticipants]: (state) => {
    state.selectedParticipants = [];
  },

  [Mutations.purgeWhisperParticipants]: (state) => {
    state.whisperToParticipants = [];
  },
};
