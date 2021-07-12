import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

import { getTokenData } from "@/services/jwt.service";

export default {
  onCreateHubConnection: ({ state, commit, dispatch, rootState }) => {
    const token = getTokenData();
    const connection = new HubConnectionBuilder()
      .withUrl(
        `https://olinqua-linq-websocketsservice-dev.azurewebsites.net/chatHub`,
        {
          accessTokenFactory: () => token,
        }
      )
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    connection
      .start()
      .then(() => {
        console.log("Hub connection started");
        commit("setSocketHubConnection", connection);
      })
      .catch((error) => {
        connection.stop();
        console.log("Error establishing the connection: ", error);
      });

    connection.on("ReceivedMessageNotification", (response) => {
      const message = JSON.parse(response);
      console.log("ReceivedMessageNotification", message);

      dispatch("onReceivedMessageNotification", message);
      commit("purgeUserIsTyping", {
        userId: message.authorId,
        conversationId: message.conversationId,
      });
    });

    connection.on("MessageUpdatedNotification", (response) => {
      const message = JSON.parse(response);
      // todo
      console.log("MessageUpdatedNotification", message);
    });

    connection.on("MessageAcknowledgedNotification", (response) => {
      const message = JSON.parse(response);
      console.log("MessageAcknowledgedNotification", message);

      dispatch("onMessageAcknowledgedNotification", message);
    });

    connection.on("UserIsTypingNotification", (payload) => {
      const whoIsTyping = JSON.parse(payload);
      console.log("UserIsTypingNotification", whoIsTyping);
      if (
        state.mapOfTypingUsers[whoIsTyping.userId + whoIsTyping.conversationId]
      ) {
        clearTimeout(
          state.mapOfTypingUsers[
            whoIsTyping.userId + whoIsTyping.conversationId
          ]
        );

        state.mapOfTypingUsers[
          whoIsTyping.userId + whoIsTyping.conversationId
        ] = null;
      }

      state.mapOfTypingUsers[whoIsTyping.userId + whoIsTyping.conversationId] =
        setTimeout(() => {
          commit("purgeUserIsTyping", whoIsTyping);
        }, 3000);

      if (rootState.auth.user.id !== whoIsTyping.userId) {
        dispatch("onUserIsTypingNotification", whoIsTyping);
      }
    });

    connection.on("ConversationCreatedNotification", (payload) => {
      const conversation = JSON.parse(payload);
      console.log("ConversationCreatedNotification", conversation);

      dispatch("onConversationCreatedNotification", conversation);
    });

    connection.on("ConversationTopicChangedNotification", (payload) => {
      const conversation = JSON.parse(payload);
      console.log("ConversationTopicChangedNotification", conversation);

      dispatch("onConversationTopicChangedNotification", conversation);
    });

    connection.on("UserAddedToConversationNotification", (payload) => {
      const data = JSON.parse(payload);
      console.log("UserAddedToConversationNotification", data);

      dispatch("onUserAddedToConversationNotification", data);
    });

    connection.on("UserLeaveConversationNotification", (payload) => {
      const data = JSON.parse(payload);
      // todo
      console.log("UserLeaveConversationNotification", data);
    });

    connection.on("MessageReadNotification", (payload) => {
      const readMessage = JSON.parse(payload);
      console.log("MessageReadNotification", readMessage);
      dispatch("onMessageReadNotification", readMessage);
    });
  },
  onSocketConnectionClose: ({ state }) => {
    console.log("onSocketConnectionClose");
    state.hubConnection.stop();
  },
};
