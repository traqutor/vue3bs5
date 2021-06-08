import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

import {getTokenData} from "@/services/jwt.service";

export default {
    onCreateHubConnection: ({ commit, state, rootState }) => {
        const token = getTokenData();
        const connection = new HubConnectionBuilder()
            .withUrl(`https://olinqua-linq-websocketsservice-dev.azurewebsites.net/chatHub`, {
                accessTokenFactory: () => token
            })
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        connection
            .start()
            .then(() => {
                console.log("Hub connection started");
                commit("setSocketHubConnection", connection);
            })
            .catch(error => {
                connection.stop();
                console.log("Error establishing the connection: ", error);
            });


        connection.on("ReceivedMessageNotification", response => {
            const message = JSON.parse(response);
            console.log("ReceivedMessageNotification", message);
            // dispatch(ON_RECEIVED_MESSAGE_NOTIFICATION, message);
            // commit(PURGE_USER_TYPING, {
            //     userId: message.authorId,
            //     conversationId: message.conversationId
            // });
        });

        connection.on("MessageUpdatedNotification", response => {
            const message = JSON.parse(response);
            console.log("MessageUpdatedNotification", message);
        });

        connection.on("MessageAcknowledgedNotification", response => {
            const message = JSON.parse(response);
            console.log("MessageAcknowledgedNotification", message);
            // dispatch(ON_MESSAGE_ACKNOWLEDGED_NOTIFICATION, message);
        });

        connection.on("UserIsTypingNotification", payload => {
            const whoIsTyping = JSON.parse(payload);
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

            state.mapOfTypingUsers[
            whoIsTyping.userId + whoIsTyping.conversationId
                ] = setTimeout(() => {
                // commit(PURGE_USER_TYPING, whoIsTyping);
            }, 3000);

            if (rootState.auth.user.id !== whoIsTyping.userId) {
                // dispatch(ON_USER_IS_TYPING_NOTIFICATION, whoIsTyping);
            }
        });

        connection.on("ConversationCreatedNotification", payload => {
            const conversation = JSON.parse(payload);
            console.log("ConversationCreatedNotification", conversation);

            // dispatch(ON_CONVERSATION_CREATED_NOTIFICATION, conversation);
        });

        connection.on("ConversationTopicChangedNotification", payload => {
            const conversation = JSON.parse(payload);
            console.log("ConversationTopicChangedNotification", conversation);
        });

        connection.on("UserAddedToConversationNotification", payload => {
            const data = JSON.parse(payload);
            console.log("UserAddedToConversationNotification", data);
            // dispatch(ON_USER_ADDED_TO_CONVERSATION_NOTIFICATION, data);
        });

        connection.on("UserLeaveConversationNotification", payload => {
            const data = JSON.parse(payload);
            console.log("UserLeaveConversationNotification", data);
        });

        connection.on("MessageReadNotification", payload => {
            const readMessage = JSON.parse(payload);
            console.log("MessageReadNotification", readMessage);
            // dispatch(ON_MESSAGE_READ_NOTIFICATION, readMessage);
        });

    },
    onSocketConnectionClose: ({ state }) => {
        console.log("SOCKET_CONNECTION_CLOSE", state);
        state.hubConnection.stop();
    }
}
