import {guidsAreEqual} from "@/services/guids.service";

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
    purgeSelectedParticipants: state => {
        state.selectedParticipants = [];
    },
    purgeWhisperParticipants: state => {
        state.whisperToParticipants = [];
    },
    setPageOfParticipants: (state, page) => {
        state.pageOfParticipants = page;
    },
    setParticipantsSearchText: (state, text) => {
        state.textToSearchParticipants = text;
    },
    purgeParticipantsSearchParams: state => {
        state.textToSearchParticipants = "";
    },
    setIsLoadingUsers: (state, flag) => {
        state.isLoadingUsers = flag;
    },
    toggleSelectedParticipants: (state, participant) => {
        const i = state.selectedParticipants.findIndex(prt => guidsAreEqual(prt.id, participant.id));
        if (i > -1) {
            state.selectedParticipants.splice(i, 1);
        } else {
            state.selectedParticipants.push(participant);
        }
    },
    toggleWhisperParticipants: (state, participant) => {
        const i = state.whisperToParticipants.findIndex(prt => guidsAreEqual(prt.id, participant.id));
        if (i > -1) {
            state.whisperToParticipants.splice(i, 1);
        } else {
            state.whisperToParticipants.push(participant);
        }
    }
}
