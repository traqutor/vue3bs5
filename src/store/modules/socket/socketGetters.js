export default {
  isSocketConnectionConnected: (state) => {
    return (
      state.hubConnection && state.hubConnection.connectionState === "Connected"
    );
  },
};
