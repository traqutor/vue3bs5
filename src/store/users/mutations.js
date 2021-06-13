export default {
  setParticipants: (state, participants) => {
    state.participants = state.participants.concat(participants);
  },
  setUsers: (state, users) => {
    state.systemUsers = users;
  },
  setRoles: (state, roles) => {
    state.systemRoles = roles;
  },
  setPageOfParticipants: (state, page) => {
    state.pageOfParticipants = page;
  },
  setParticipantsSearchText: (state, text) => {
    state.textToSearchParticipants = text;
  },
  purgeParticipantsSearchParams: (state) => {
    state.textToSearchParticipants = '';
  },
  setIsLoadingUsers: (state, flag) => {
    state.isLoadingUsers = flag;
  },
  setSelectedParticipants: (state, participants) => {
    state.selectedParticipants = participants;
  },
  setWhisperParticipants: (state, participants) => {
    state.whisperToParticipants = participants;
  },
  purgeSelectedParticipants: (state) => {
    state.selectedParticipants = [];
  },
  purgeWhisperParticipants: (state) => {
    state.whisperToParticipants = [];
  },
};
