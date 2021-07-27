import { guidsAreEqual, guidsGetNull } from "@/services/guids.service";
import { CHAT_VIEW_MODES } from "@/const";

function sortByUserName(a, b) {
  if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
    return -1;
  }
  if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
    return 1;
  }
  return 0;
}

function sortByName(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}

function searchByName(text, name) {
  return text.length > 0
    ? name.toLowerCase().includes(text.toLowerCase())
    : true;
}

function searchByUser(text, usr) {
  return text.length > 0
    ? searchByName(text, usr.userName) ||
        usr.roles.some((role) => {
          return role.name.toLowerCase().includes(text.toLowerCase());
        })
    : true;
}

export default {
  getSystemUsers: (state, getters) => {
    if (getters.getChatViewMode === CHAT_VIEW_MODES.ADD_PARTICIPANTS) {
      return state.systemUsers
        .filter((usr) => {
          return (
            getters.getSelectedConversation.participants.filter((part) => {
              return guidsAreEqual(part.id, usr.userId);
            }).length <= 0 && searchByUser(state.textToSearchParticipants, usr)
          );
        })
        .sort(sortByUserName);
    } else {
      return state.systemUsers
        .filter((usr) => {
          return (
            getters.getLoggedUser &&
            !guidsAreEqual(usr.userId, getters.getLoggedUser.id) &&
            searchByUser(state.textToSearchParticipants, usr)
          );
        })
        .sort(sortByUserName);
    }
  },
  getSystemRoles: (state, getters) => {
    if (getters.getChatViewMode === CHAT_VIEW_MODES.ADD_PARTICIPANTS) {
      return state.systemRoles
        .filter((role) => {
          return (
            getters.getSelectedConversation.participants.filter((part) => {
              return guidsAreEqual(part.id, role.id);
            }).length <= 0 &&
            searchByName(state.textToSearchParticipants, role.name)
          );
        })
        .sort(sortByName);
    } else {
      return state.systemRoles
        .filter((role) => {
          return (
            role.id !== getters.getLoggedUser.id &&
            searchByName(state.textToSearchParticipants, role.name)
          );
        })
        .sort(sortByName);
    }
  },
  getSelectedParticipants: (state) => {
    return state.selectedParticipants;
  },
  isParticipantSelected: (state) => (id) => {
    return state.selectedParticipants.some((prt) => guidsAreEqual(prt.id, id));
  },
  getWhisperToParticipants: (state) => {
    return state.whisperToParticipants;
  },
  isWhisperParticipantSelected: (state) => (id) => {
    return state.whisperToParticipants.some((prt) => guidsAreEqual(prt.id, id));
  },
  isLoadingUsers: (state) => {
    return state.isLoadingUsers;
  },
  getParticipantById: (state) => (id) => {
    if (!id || id === guidsGetNull()) return;

    let participant = null;
    state.systemRoles.forEach((rle) => {
      if (guidsAreEqual(rle.id, id)) {
        participant = { ...rle, id: rle.id, isRole: true };
      }
    });
    state.systemUsers.forEach((usr) => {
      if (guidsAreEqual(usr.userId, id)) {
        participant = {
          ...usr,
          id: usr.userId,
          name: usr.userName,
          isRole: false,
        };
      }
    });
    return participant;
  },
  getUserById: (state) => (id) => {
    let user = null;
    state.systemUsers.forEach((usr) => {
      if (guidsAreEqual(usr.userId, id)) {
        user = usr;
      }
    });
    return user;
  },
  isUserById: (state) => (id) => {
    let isUser = false;
    state.systemUsers.forEach((usr) => {
      if (guidsAreEqual(usr.id, id)) {
        isUser = true;
      }
    });
    return isUser;
  },
  getRoleById: (state) => (id) => {
    let role = "";
    state.systemRoles.forEach((rle) => {
      if (guidsAreEqual(rle.id, id)) {
        role = rle;
      }
    });
    return role;
  },
  isRoleById: (state) => (id) => {
    let isRole = false;
    state.systemRoles.forEach((rle) => {
      if (guidsAreEqual(rle.id, id)) {
        isRole = true;
      }
    });
    return isRole;
  },
  getDirectParticipant: (state, getters) => (conversation) => {
    return conversation.participants.find((usr) => {
      return (
        getters.getLoggedUser &&
        !guidsAreEqual(usr.id, getters.getLoggedUser.id)
      );
    });
  },

  getMessageAuthor: (state, getters) => (message) => {
    let author = { user: null, role: null };
    if (message.authorId) {
      author.user = getters.getSystemUsers.find(
        (usr) => usr.userId === message.authorId
      );
    }
    if (message.activeRoleId) {
      author.role = getters.getSystemRoles.find(
        (rle) => rle.id === message.activeRoleId
      );
    }
    return author;
  },

  getTextToSearchParticipants: (state) => {
    return state.textToSearchParticipants;
  },
};
