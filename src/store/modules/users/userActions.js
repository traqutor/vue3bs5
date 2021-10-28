import axios from "axios";
import { axiosWebApiInstance } from "@/services/axios.service";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { guidsAreEqual } from "@/services/guids.service";

let getUsersSource = null;

export default {
  [Actions.getUsers]: ({ commit }) => {
    if (getUsersSource) {
      getUsersSource.cancel();
    }

    getUsersSource = axios.CancelToken.source();
    const url = `${process.env.VUE_APP_BASE_URL}/Users/Get`;

    axiosWebApiInstance
      .get(url, { cancelToken: getUsersSource.token })
      .then(function (response) {
        getUsersSource = null;
        commit(Mutations.setUsers, response.data.users);
        commit(Mutations.setRoles, response.data.roles);
      });
  },

  [Actions.setToggleParticipantSelected]: (
    { commit, state, getters },
    participantId
  ) => {
    const selectedParticipants = [...state.selectedParticipants];
    const i = selectedParticipants.findIndex((prt) =>
      guidsAreEqual(prt.id, participantId)
    );
    if (i > -1) {
      selectedParticipants.splice(i, 1);
    } else {
      const participant = getters.getParticipantById(participantId);
      selectedParticipants.push(participant);
    }
    commit(Mutations.setSelectedParticipants, selectedParticipants);
  },

  [Actions.setToggleParticipantToWhisper]: (
    { commit, state, getters },
    participantId
  ) => {
    const whisperToParticipants = [...state.whisperToParticipants];
    const i = state.whisperToParticipants.findIndex((prt) =>
      guidsAreEqual(prt.id, participantId)
    );
    if (i > -1) {
      whisperToParticipants.splice(i, 1);
    } else {
      const participant = getters.getParticipantById(participantId);
      whisperToParticipants.push(participant);
    }
    commit(Mutations.setWhisperParticipants, whisperToParticipants);
  },
};
