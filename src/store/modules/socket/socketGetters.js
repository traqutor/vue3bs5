export default {
  getSocketConnectionStatus: (state) => {
    return state.hubConnection
      ? state.hubConnection.connectionState
      : "Socket is not connected";
  },
  getIsSocketOnline: (state) => {
    return state.isSocketOnline;
  },
  getIsSocketReconnecting: (state) => {
    return state.isSocketReconnecting;
  },
};
