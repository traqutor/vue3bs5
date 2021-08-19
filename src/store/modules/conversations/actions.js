import axios from "axios";
import { axiosWebApiInstance } from "@/services/axios.service";
import {
  guidsAreEqual,
  guidsFilterUnique,
  guidsGetOne,
} from "@/services/guids.service";
import { CHAT_VIEW_MODES } from "@/const";
import { Actions, MEDIA_TYPES, Mutations } from "@/store/enums/EnumTypes";

let getMessagesSource = null;

export default {
  onGetConversations: (
    { state, commit, rootState },
    { refresh = false, silent = false }
  ) => {
    if (!silent) commit("setIsConversationsLoading", true);

    let skipConversations = refresh
      ? 0
      : state.pageOfConversations.takeConversations;
    let takeConversations = refresh
      ? 20
      : state.pageOfConversations.takeConversations + 20;

    // silly limiter no more then 100 conversations can be fetched
    takeConversations = takeConversations > 99 ? 99 : takeConversations;

    commit("setPageOfConversations", { skipConversations, takeConversations });
    let activeRoleIds = "";
    rootState.auth.user.SystemRoles.forEach((rle, index) => {
      activeRoleIds =
        activeRoleIds + (index === 0 ? "&activeRoleIds=" : "&") + rle.Id;
    });
    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetConversations?skip=0&take=${takeConversations}${activeRoleIds}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        commit("setConversations", response.data.conversations);
        commit("setIsConversationsLoading", false);
      })
      .catch((error) => {
        console.error("On GET_CONVERSATIONS error:", error);
      });
  },

  onSelectConversation: ({ commit, dispatch }, conversationId) => {
    commit("setSelectedConversationId", conversationId);
    commit("purgeWhisperParticipants");
    commit("setChatViewMode", CHAT_VIEW_MODES.VIEW);
    commit(Mutations.setReplyMessage, null);
    dispatch("onGetMessages", {
      conversationId: conversationId,
      refresh: true,
      showLoading: true,
    });
  },

  onCreateConversation: ({ commit, state, rootState, getters }) => {
    commit("setIsConversationCreating", true);

    return new Promise((resolve) => {
      const topic = state.conversationTopic
        ? state.conversationTopic
        : rootState.users.selectedParticipants
            .map((participant) => {
              return getters.getParticipantById(participant.id).name;
            })
            .join(", ");

      const values = {
        activeRoleId: state.selectedCreator.id
          ? state.selectedCreator.id
          : null,
        topic: topic,
        messageText: state.messageText,
        pushNotification: {
          title: topic,
          body: state.messageText,
        },
        participants: rootState.users.selectedParticipants,
      };

      const url = `${process.env.VUE_APP_BASE_URL}/Messaging/CreateConversation`;

      axiosWebApiInstance
        .post(url, values)
        .then((response) => {
          console.log("CreateConversation", response);
          if (response.data.isOk) {
            commit("setIsConversationCreating", false);
            commit("setConversationTopic", null);
            commit("purgeSelectedParticipants");
            commit("setChatViewMode", CHAT_VIEW_MODES.VIEW);
            const conversation = state.conversations.find(
              (item) => item.id === response.data.result
            );
            if (conversation) {
              commit("setSelectedConversationId", conversation.id);
            }
            resolve();
          } else {
            console.error(
              "On CREATE_CONVERSATION error: ",
              response.data.message
            );
          }
        })
        .catch((error) => {
          commit("setIsConversationCreating", false);
          console.error("On CREATE_CONVERSATION error: ", error);
        });
    });
  },

  onDirectConversationUpdate: ({ commit, dispatch, state, getters }) => {
    commit("setIsConversationCreating", true);
    const requestPayload = {
      user: { id: getters.getLoggedUser.id, isRole: false },
      recipient: getters.getSelectedParticipants[0],
    };
    return new Promise((resolve) => {
      dispatch("onGetDirectConversation", requestPayload).then(
        (conversation) => {
          commit("setIsConversationCreating", false);
          commit("setConversationTopic", null);
          commit("purgeSelectedParticipants");
          commit("setConversation", conversation);
          commit("setSelectedConversationId", conversation.id);

          dispatch("onGetMessages", {
            conversationId: conversation.id,
            refresh: true,
            showLoading: true,
          }).then(() => {
            if (state.messageText) {
              const message = {
                messageText: state.messageText,
              };
              dispatch(Actions.onCreateMessage, message);
            }
            resolve();
          });
        }
      );
    });
  },

  [Actions.onCreateMessage]: ({ commit, state, getters }, payload) => {
    commit("setIsMessageCreating", true);

    const message = {
      id: guidsGetOne(),
      activeRoleId: payload.activeRoleId,
      conversationId: state.selectedConversationId,
      messageText: state.messageText,
      isWhisper: getters.getWhisperToParticipants.length > 0,
      requiresAcknowledgement: payload.requiresAcknowledgement,
      repliedId: getters.getSelectedReplyMessage
        ? getters.getSelectedReplyMessage.id
        : "",
      replyText: getters.getSelectedReplyMessage
        ? getters.getSelectedReplyMessage.text
        : "",
      repliedFrom: getters.getSelectedReplyMessage
        ? getters.getLoggedUser.id
        : "",
      pushNotification: {
        title: "Message title",
        body: "Message body text",
      },
      attachments: getters.getMediaShareGalleryItems.map((share) => {
        return {
          id: share.id,
          blobType: MEDIA_TYPES.PHOTO,
          aspectRatio: 0,
        };
      }),
      whisperRecipients: getters.getWhisperToParticipants.map((whisper) => {
        return { ...whisper, id: whisper.id.toLowerCase() };
      }),
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/SendMessage`;

    axiosWebApiInstance
      .post(url, message)
      .then(function (response) {
        if (response.data.isOk) {
          commit("setMessageText", null);
          commit("purgeWhisperParticipants");
          commit(Mutations.setMediaShareGalleryItems, []);
          commit(Mutations.setReplyMessage, null);
        } else {
          console.error("On CREATE_MESSAGE error:", response.data.message);
        }
        commit("setIsMessageCreating", false);
      })
      .catch((error) => {
        commit("setIsMessageCreating", false);
        console.error("On CREATE_MESSAGE error:", error);
      });
  },

  [Actions.onQuickMessageResponse]: ({ state, getters }, payload) => {
    const message = {
      id: guidsGetOne(),
      activeRoleId: null,
      conversationId: state.selectedConversationId,
      messageText: payload.quickMessageText,
      isWhisper: false,
      requiresAcknowledgement: false,
      repliedId: getters.getLoggedUser.id,
      replyText: payload.message.text,
      repliedFrom: payload.message.authorId,
      pushNotification: {
        title: "Quick Reply Message",
        body: payload.quickMessageText,
      },
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/SendMessage`;

    axiosWebApiInstance
      .post(url, message)
      .then(function (response) {
        if (!response.data.isOk) {
          console.error(
            "On QuickMessageResponse error:",
            response.data.message
          );
        }
      })
      .catch((error) => {
        console.error("On CREATE_MESSAGE error:", error);
      });
  },

  onGetMessages: (
    { commit, getters },
    { conversationId, refresh = false, showLoading = false }
  ) => {
    if (showLoading) commit("setIsMessagesLoading", true);

    const lastMessageId = refresh ? "" : getters.getMessages[0].id;

    if (getMessagesSource) {
      if (refresh) {
        getMessagesSource.cancel("Cancel old get messages. Start new one.");
      }
    }
    getMessagesSource = axios.CancelToken.source();
    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetMessages?ConversationId=${conversationId}&lastMessageId=${lastMessageId}`;

    axiosWebApiInstance
      .get(url, { cancelToken: getMessagesSource.token })
      .then(function (response) {
        getMessagesSource = null;
        let arr = response.data.messages.reverse();
        console.log("on get messages response", arr);
        let messages = refresh ? [] : getters.getMessages;
        messages = arr.concat(messages);

        commit("setMessages", messages);
        commit("setIsMessagesLoading", false);
      });
  },

  onGetDirectConversation: (_, requestPayload) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetDirectConversation`;

      axiosWebApiInstance
        .post(url, requestPayload)
        .then(function (response) {
          const conversation = response.data.conversations[0];

          resolve(conversation);
        })
        .catch((error) => {
          console.error("On getDirectConversation error:", error);
        });
    });
  },

  onUserIsTyping: ({ state, rootState }) => {
    const conversationId = state.selectedConversationId;
    console.log("UserIsTyping");
    rootState.socket.hubConnection
      .invoke("UserIsTyping", conversationId)
      .catch((error) => {
        console.error("On UserIsTyping error:", error);
      });
  },

  onMarkMessagesAsRead: ({ state, getters }) => {
    let data = {
      conversationId: state.selectedConversationId,
      messagesIds: null,
      activeRolesIds: null,
    };
    /**
     * filter not read and not whispered messages Ids
     **/
    const messagesIds = getters.getSelectedConversation.messages
      .filter((message) => {
        return (
          !message.isWhisper &&
          !message.watchedByUsers.some((watched) => {
            return (
              guidsAreEqual(watched.id, getters.getLoggedUser.id) ||
              getters.getLoggedUser.SystemRoles.some((role) => {
                return guidsAreEqual(role.Id, watched.id);
              })
            );
          })
        );
      })
      .map((message) => message.id);

    /**
     * filter whispered and not read messages
     */
    const whisperedMessages = getters.getSelectedConversation.messages.filter(
      (message) => {
        return (
          message.isWhisper &&
          !message.watchedByUsers.some((watched) => {
            return (
              guidsAreEqual(watched.id, getters.getLoggedUser.id) ||
              getters.getLoggedUser.SystemRoles.some((role) => {
                return guidsAreEqual(role.Id, watched.id);
              })
            );
          })
        );
      }
    );

    /**
     * update conversation messages as read by logged user
     */
    if (messagesIds.length > 0) {
      // user and all available roles in conversation read the message
      const roles = getters.getConversationAvailableCreationRoles
        .filter((role) => role.isRole)
        .map((role) => role.id.toLowerCase());

      data = {
        conversationId: state.selectedConversationId,
        messagesIds: messagesIds,
        activeRolesIds: roles,
      };

      const url = `${process.env.VUE_APP_BASE_URL}/Messaging/ReadMessage`;

      axiosWebApiInstance
        .post(url, data)
        .then(function (response) {
          if (!response.data.isOk) {
            console.error("On ON_MESSAGE_READ error:", response);
          }
        })
        .catch((error) => {
          console.error("On ON_MESSAGE_READ error:", error);
        });
    }

    /**
     * update whispered messages as read by logged user
     */
    if (whisperedMessages.length > 0) {
      whisperedMessages.forEach((message) => {
        const roles = message.whisperRecipients
          .filter((whisperer) => {
            return (
              whisperer.isRole &&
              getters.getLoggedUser &&
              getters.getLoggedUser.SystemRoles.find(
                (role) => role.id === whisperer.id
              )
            );
          })
          .map((recipient) => recipient.id);
        data = {
          conversationId: state.selectedConversationId,
          messagesIds: [message.id],
          activeRolesIds: roles,
        };

        const url = `${process.env.VUE_APP_BASE_URL}/Messaging/ReadMessage`;

        axiosWebApiInstance
          .post(url, data)
          .then(function (response) {
            if (!response.data.isOk) {
              console.error("On ON_MESSAGE_READ error:", response);
            }
          })
          .catch((error) => {
            console.error("On ON_MESSAGE_READ error:", error);
          });
      });
    }
  },

  onAcknowledgeMessage: ({ getters }, messageId) => {
    const data = {
      conversationId: getters.getSelectedConversationId,
      messageId: messageId,
      activeRoleId: null,
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/AcknowledgeMessage`;

    axiosWebApiInstance
      .post(url, data)
      .then(function () {})
      .catch((error) => {
        console.log("On read message error:", error);
      });

    const roles = getters.getConversationAvailableCreationRoles
      .filter((role) => role.isRole)
      .map((role) => role.id.toLowerCase());

    roles.forEach((role) => {
      data.activeRoleId = role;

      axiosWebApiInstance
        .post(url, data)
        .then(function () {})
        .catch((error) => {
          console.log("On read message error:", error);
        });
    });
  },

  [Actions.onMessageQuickReaction]: (
    { getters },
    { messageId, quickReaction }
  ) => {
    const data = {
      conversationId: getters.getSelectedConversationId,
      messageId: messageId,
      quickReaction: quickReaction,
      activeRoleId: null,
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/MessageQuickReaction`;

    axiosWebApiInstance
      .post(url, data)
      .then(function () {})
      .catch((error) => {
        console.error("On message quick reaction error:", error);
      });
  },

  [Actions.onRemoveQuickReaction]: (
    { getters },
    { messageId, quickReaction }
  ) => {
    const data = {
      conversationId: getters.getSelectedConversationId,
      messageId: messageId,
      quickReaction: quickReaction,
      activeRoleId: null,
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/RemoveQuickReaction`;

    axiosWebApiInstance
      .delete(url, { data })
      .then(function () {})
      .catch((error) => {
        console.error("On message remove quick reaction error:", error);
      });
  },

  onUserAddedToConversationNotification: (
    { state, commit, dispatch },
    payload
  ) => {
    const idx = state.conversations.findIndex((c) =>
      guidsAreEqual(c.id, payload.conversationId)
    );

    if (idx !== -1) {
      const conversations = [...state.conversations];
      const conversation = conversations.splice(idx, 1)[0];
      const tmp = [...conversation.participants, ...payload.participants];
      const participants = guidsFilterUnique(tmp);
      conversation.participants = [...participants];
      conversations.splice(0, 0, conversation);

      commit("setSelectedConversationId", conversation.id);
      commit("setConversations", [...conversations]);
    } else {
      dispatch("onGetConversations", { refresh: false });
    }
  },

  onConversationCreatedNotification: ({ state, commit }, payload) => {
    const conversations = [...state.conversations];
    const idx = conversations.findIndex((c) => c.id === payload.id);
    if (idx !== -1) {
      const tmp = conversations.splice(idx, 1)[0];
      conversations.splice(0, 0, tmp);
    } else {
      conversations.unshift(payload);
    }
    commit("setConversations", conversations);
  },

  onMessageAcknowledgedNotification: ({ state, commit, getters }, message) => {
    console.log("ON_MESSAGE_ACKNOWLEDGED_NOTIFICATION", message);
    if (guidsAreEqual(state.selectedConversationId, message.conversationId)) {
      const messages = [...getters.getMessages];
      const idx = messages.findIndex((msg) => msg.id === message.messageId);
      if (idx !== -1) {
        const msg = { ...messages[idx] };
        if (!msg.acknowledgedByUsers) {
          msg.acknowledgedByUsers = [];
        }
        const isAcknowledged = msg.acknowledgedByUsers.some((ack) =>
          guidsAreEqual(ack.id, message.acknowledgeByUser.id)
        );
        if (!isAcknowledged) {
          msg.acknowledgedByUsers.push(message.acknowledgeByUser);
          messages[idx] = msg;
        }
      }
      commit("setMessages", messages);
    }
  },

  onReceivedMessageNotification: ({ state, getters, commit }, message) => {
    const idx = state.conversations.findIndex((c) =>
      guidsAreEqual(c.id, message.conversationId)
    );

    if (idx !== -1) {
      const conversations = [...state.conversations];
      const conversation = { ...conversations[idx] };
      const isMessage = conversation.messages.some((msg) => {
        return guidsAreEqual(msg.id, message.id);
      });

      if (!isMessage) {
        const tmpMessages = conversations[idx].messages;
        tmpMessages.push(message);
        conversations[idx].messages = [...tmpMessages];

        if (!getters.getIsLoggedUserMessageAuthor(message)) {
          conversation.unreadMessageCount = conversation.unreadMessageCount + 1;
          conversation.lastMessage = message;
        }

        conversations.splice(idx, 1);
        conversations.splice(0, 0, conversation);

        commit("setConversations", [...conversations]);
      }
    }
  },

  onMessageReadNotification: ({ state, commit, getters }, payload) => {
    const idx = state.conversations.findIndex(
      (c) => c.id === payload.conversationId
    );
    let conversation = { ...state.conversations[idx] };

    const loggedUserRead = payload.participants.some((participant) =>
      getters.getIsLoggedUserParticipant(participant)
    );

    if (loggedUserRead && conversation.unreadMessageCount > 0) {
      let count = conversation.unreadMessageCount;
      payload.messageIds.forEach(() => {
        count = count - 1;
      });
      conversation.unreadMessageCount = count >= 0 ? count : 0;
    }

    const tmpConversations = state.conversations.map((conv) =>
      conv.id !== conversation.id ? conv : { ...conversation }
    );

    commit("setConversations", tmpConversations);

    //update messages watched by users
    if (guidsAreEqual(state.selectedConversationId, payload.conversationId)) {
      const messages = getters.getMessages.map((message) => {
        let msg = { ...message };
        payload.messageIds.forEach((mId) => {
          if (guidsAreEqual(mId, message.id)) {
            const all = [...msg.watchedByUsers, ...payload.participants];
            const uniq = guidsFilterUnique(all);
            msg = { ...msg, watchedByUsers: uniq };
          }
        });
        return msg;
      });

      commit("setMessages", messages);
    }
  },

  onUserIsTypingNotification: ({ state, commit }, whoIsTyping) => {
    const idx = state.conversations.findIndex(
      (c) => c.id === whoIsTyping.conversationId
    );

    const conversation = { ...state.conversations[idx] };
    if (!conversation.typingUsers) {
      conversation.typingUsers = [whoIsTyping];
    } else {
      if (
        !conversation.typingUsers.some((t) => t.userId === whoIsTyping.userId)
      ) {
        conversation.typingUsers.push(whoIsTyping);
      }
    }

    const tmpConversations = state.conversations.map((conv) =>
      conv.id !== conversation.id ? conv : { ...conversation }
    );

    commit("setConversations", [...tmpConversations]);
  },

  onAddUsersToConversation: ({ commit, getters }) => {
    const values = {
      conversationId: getters.getSelectedConversationId,
      participants: getters.getSelectedParticipants,
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/AddUsersToConversation`;

    axiosWebApiInstance
      .post(url, values)
      .then(function () {
        commit("purgeSelectedParticipants");
      })
      .catch((error) => {
        console.error("On onAddUsersToConversation error:", error);
      });
  },

  onRemoveUsersFromConversation: ({ commit, getters }, participants) => {
    const values = {
      activeRoleId: null,
      conversationId: getters.getSelectedConversationId,
      participants: participants,
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/RemoveConversationParticipants`;

    axiosWebApiInstance
      .post(url, values)
      .then(function () {
        const conversation = { ...getters.getSelectedConversation };
        const tmpParticipants = conversation.participants.filter(
          (conv) =>
            participants.filter((p) => guidsAreEqual(p.id, conv.id)).length <= 0
        );
        console.log("tmpParticipants", tmpParticipants);
        conversation.participants = [...tmpParticipants];

        commit("setConversation", conversation);
        commit("purgeSelectedParticipants");
      })
      .catch((error) => {
        console.error("On onRemoveUsersFromConversation error:", error);
      });
  },
};
