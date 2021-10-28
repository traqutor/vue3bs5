import { Mutations } from "@/store/enums/EnumTypes";

export default {
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
