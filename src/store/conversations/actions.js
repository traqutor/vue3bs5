import axios from 'axios';
import {axiosWebApiInstance} from '@/services/axios.service';
import {
  guidsAreEqual,
  guidsFilterUnique,
  guidsGetOne,
} from '@/services/guids.service';
import {CHAT_VIEW_MODES} from '@/const';

let getMessagesSource = null;

export default {
  onGetConversations: (
    {state, commit, rootState},
    {refresh = false, silent = false}
  ) => {
    if (!silent) commit('setIsConversationsLoading', true);

    let skipConversations = refresh
      ? 0
      : state.pageOfConversations.takeConversations;
    let takeConversations = refresh
      ? 20
      : state.pageOfConversations.takeConversations + 20;

    // silly limiter no more then 100 conversations can be fetched
    takeConversations = takeConversations > 99 ? 99 : takeConversations;

    commit('setPageOfConversations', {skipConversations, takeConversations});
    let activeRoleIds = '';
    rootState.auth.user.SystemRoles.forEach((rle, index) => {
      activeRoleIds =
        activeRoleIds + (index === 0 ? '&activeRoleIds=' : '&') + rle.Id;
    });
    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetConversations?skip=0&take=${takeConversations}${activeRoleIds}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        commit('setConversations', response.data.conversations);
        commit('setIsConversationsLoading', false);
      })
      .catch((error) => {
        console.error('On GET_CONVERSATIONS error:', error);
      });
  },

  onSelectConversation: ({commit, dispatch}, conversationId) => {
    commit('setSelectedConversationId', conversationId);
    commit('purgeWhisperParticipants');
    commit('setChatViewMode', CHAT_VIEW_MODES.VIEW);
    dispatch('onGetMessages', {
      conversationId: conversationId,
      refresh: true,
      showLoading: true,
    });
  },

  onCreateConversation: ({commit, dispatch, state, rootState, getters}) => {
    commit('setIsConversationCreating', true);

    return new Promise((resolve) => {
      if (rootState.users.selectedParticipants.length === 1) {
        console.log(rootState.users.selectedParticipants);
        dispatch('onGetDirectConversation', {
          user: {id: rootState.auth.user.id, isRole: false},
          recipient: rootState.users.selectedParticipants[0],
        }).then((response) => {
          commit('setIsConversationCreating', false);
          commit('setConversationTopic', null);
          commit('purgeSelectedParticipants');
          commit('setSelectedConversationId', response.id);

          dispatch('onGetMessages', {
            conversationId: response.id,
            refresh: true,
            showLoading: true,
          });

          const message = {
            messageText: state.messageText,
          };
          dispatch('onCreateMessage', message);
          resolve();
        });
      } else {
        const topic = state.conversationTopic
          ? state.conversationTopic
          : rootState.users.selectedParticipants
            .map((participant) => {
              return getters.getParticipantById(participant.id).name;
            })
            .join(', ');

        const values = {
          activeRoleId: state.selectedCreator.id
            ? state.selectedCreator.id
            : null,
          topic: topic,
          messageText: state.messageText,
          pushNotification: {
            title: topic,
            body: state.messageText
          },
          participants: rootState.users.selectedParticipants,
        };

        const url = `${process.env.VUE_APP_BASE_URL}/Messaging/CreateConversation`;

        axiosWebApiInstance
          .post(url, values)
          .then((response) => {
            console.log('CreateConversation', response);
            if (response.data.isOk) {
              commit('setIsConversationCreating', false);
              commit('setConversationTopic', null);
              commit('purgeSelectedParticipants');
              commit('setChatViewMode', CHAT_VIEW_MODES.VIEW);
              const conversation = state.conversations.find(
                (item) => item.id === response.data.result
              );
              if (conversation) {
                commit('setSelectedConversationId', conversation.id);
              }
              resolve();
            } else {
              console.error(
                'On CREATE_CONVERSATION error: ',
                response.data.message
              );
            }
          })
          .catch((error) => {
            commit('setIsConversationCreating', false);
            console.error('On CREATE_CONVERSATION error: ', error);
          });
      }
    });
  },

  onCreateMessage: ({commit, state, rootState}, payload) => {
    commit('setIsMessageCreating', true);

    const message = {
      id: guidsGetOne(),
      activeRoleId: payload.activeRoleId,
      conversationId: state.selectedConversationId,
      messageText: state.messageText,
      isWhisper: rootState.users.whisperToParticipants.length > 0,
      requiresAcknowledgement: payload.requiresAcknowledgement,
      attachements: [],
      whisperRecipients: rootState.users.whisperToParticipants.map(
        (whisper) => {
          return {...whisper, id: whisper.id.toLowerCase()};
        }
      ),
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/SendMessage`;

    axiosWebApiInstance
      .post(url, message)
      .then(function (response) {
        if (response.data.isOk) {
          commit('setMessageText', null);
          commit('purgeWhisperParticipants');
        } else {
          console.error('On CREATE_MESSAGE error:', response.data.message);
        }
        commit('setIsMessageCreating', false);
      })
      .catch((error) => {
        commit('setIsMessageCreating', false);
        console.error('On CREATE_MESSAGE error:', error);
      });
  },

  onGetMessages: (
    {commit, getters},
    {conversationId, refresh = false, showLoading = false}
  ) => {
    if (showLoading) commit('setIsMessagesLoading', true);

    const lastMessageId = refresh ? '' : getters.getMessages[0].id;

    if (getMessagesSource) {
      if (refresh) {
        getMessagesSource.cancel('Cancel old get messages. Start new one.');
      }
    }
    getMessagesSource = axios.CancelToken.source();
    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetMessages?ConversationId=${conversationId}&lastMessageId=${lastMessageId}`;

    axiosWebApiInstance
      .get(url, {cancelToken: getMessagesSource.token})
      .then(function (response) {
        getMessagesSource = null;

        let arr = response.data.messages;
        let messages = refresh ? [] : getters.getMessages;
        messages = arr.concat(messages);

        commit('setMessages', messages);
        commit('setIsMessagesLoading', false);
      });
  },

  onGetDirectConversation: (parameters) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Messaging/GetDirectConversation`;

      axiosWebApiInstance
        .post(url, parameters)
        .then(function (response) {
          const conversation = response.data.conversations[0];

          resolve(conversation);
        })
        .catch((error) => {
          console.error('On getDirectConversation error:', error);
        });
    });
  },

  onUserIsTyping: ({state, rootState}) => {
    const conversationId = state.selectedConversationId;
    rootState.socket.hubConnection
      .invoke('UserIsTyping', conversationId)
      .catch((error) => {
        console.error('On UserIsTyping error:', error);
      });
  },

  onMessageIsRead: ({state, getters}, message) => {
    const messagesIds = [];
    const isWatched = message.watchedByUsers.some((watched) => {
      return (
        guidsAreEqual(watched.id, getters.getLoggedUser.id) ||
        getters.getLoggedUser.SystemRoles.some((role) => {
          return guidsAreEqual(role.Id, watched.id);
        })
      );
    });

    if (!isWatched) {
      messagesIds.push(message.id);
    }
    if (messagesIds.length) {
      // user and all available roles in conversation read the message
      const roles = getters.getConversationAvailableCreationRoles
        .filter((role) => role.isRole)
        .map((role) => role.id.toLowerCase());

      const data = {
        conversationId: state.selectedConversationId,
        messagesIds: messagesIds,
        activeRolesIds: roles,
      };

      const url = `${process.env.VUE_APP_BASE_URL}/Messaging/ReadMessage`;

      axiosWebApiInstance
        .post(url, data)
        .then(function (response) {
          if (!response.data.isOk) {
            console.error('On ON_MESSAGE_READ error:', response.data.message);
          }
        })
        .catch((error) => {
          console.error('On ON_MESSAGE_READ error:', error);
        });
    }
  },

  onAcknowledgeMessage: (payload) => {
    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/AcknowledgeMessage`;

    axiosWebApiInstance
      .post(url, payload)
      .then(function () {
      })
      .catch((error) => {
        console.log('On read message error:', error);
      });
  },

  onUserAddedToConversationNotification: (
    {state, commit, dispatch},
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

      commit('setSelectedConversationId', conversation.id);
      commit('setConversations', [...conversations]);
    } else {
      dispatch('onGetConversations', {refresh: false});
    }
  },

  onConversationCreatedNotification: ({state, commit}, payload) => {
    const conversations = [...state.conversations];
    const idx = conversations.findIndex((c) => c.id === payload.id);
    if (idx !== -1) {
      const tmp = conversations.splice(idx, 1)[0];
      conversations.splice(0, 0, tmp);
    } else {
      conversations.unshift(payload);
    }
    commit('setConversations', conversations);
  },
  onMessageAcknowledgedNotification: ({state, commit, getters}, message) => {
    console.log('ON_MESSAGE_ACKNOWLEDGED_NOTIFICATION', message);
    if (guidsAreEqual(state.selectedConversationId, message.conversationId)) {
      const messages = [...getters.getMessages];
      const idx = messages.findIndex((msg) => msg.id === message.messageId);
      if (idx !== -1) {
        const msg = {...messages[idx]};
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
      commit('setMessages', messages);
    }
  },
  onReceivedMessageNotification: ({state, commit}, message) => {
    const idx = state.conversations.findIndex((c) =>
      guidsAreEqual(c.id, message.conversationId)
    );

    if (idx !== -1) {
      const conversations = [...state.conversations];
      const conversation = {...conversations[idx]};
      const isMessage = conversation.messages.some((msg) => {
        return guidsAreEqual(msg.id, message.id);
      });

      if (!isMessage) {
        const tmpMessages = conversations[idx].messages;
        tmpMessages.push(message);
        conversations[idx].messages = [...tmpMessages];

        conversation.unreadMessageCount = conversation.unreadMessageCount + 1;
        conversation.lastMessage = message;

        conversations.splice(idx, 1);
        conversations.splice(0, 0, conversation);

        commit('setConversations', [...conversations]);
      }
    }
  },
  onMessageReadNotification: ({state, commit, getters}, payload) => {
    const idx = state.conversations.findIndex(
      (c) => c.id === payload.conversationId
    );
    let conversation = {...state.conversations[idx]};
    if (conversation.unreadMessageCount > 0) {
      let count = conversation.unreadMessageCount;
      payload.messageIds.forEach(() => {
        count = count - 1;
      });
      conversation.unreadMessageCount = count >= 0 ? count : 0;
    }

    const tmpConversations = state.conversations.map((conv) =>
      conv.id !== conversation.id ? conv : {...conversation}
    );

    commit('setConversations', tmpConversations);

    //update messages watched by users
    if (guidsAreEqual(state.selectedConversationId, payload.conversationId)) {
      const messages = getters.getMessages.map((message) => {
        let msg = {...message};
        payload.messageIds.forEach((mId) => {
          if (guidsAreEqual(mId, message.id)) {
            const all = [...msg.watchedByUsers, ...payload.participants];
            const uniq = guidsFilterUnique(all);
            msg = {...msg, watchedByUsers: uniq};
          }
        });
        return msg;
      });

      commit('setMessages', messages);
    }
  },
  onUserIsTypingNotification: ({state, commit}, whoIsTyping) => {
    const idx = state.conversations.findIndex(
      (c) => c.id === whoIsTyping.conversationId
    );

    const conversation = {...state.conversations[idx]};
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
      conv.id !== conversation.id ? conv : {...conversation}
    );

    commit('setConversations', [...tmpConversations]);
  },

  onAddUsersToConversation: ({commit, getters}) => {
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

  onRemoveUsersFromConversation: ({commit, getters}, participants) => {
    const values = {
      activeRoleId: null,
      conversationId: getters.getSelectedConversationId,
      participants: participants
    };

    const url = `${process.env.VUE_APP_BASE_URL}/Messaging/RemoveConversationParticipants`;

    axiosWebApiInstance
      .post(url, values)
      .then(function () {
        const conversation = {...getters.getSelectedConversation};
        const tmpParticipants = conversation.participants
          .filter((conv) => participants
            .filter(p => guidsAreEqual(p.id, conv.id)).length <= 0);
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
