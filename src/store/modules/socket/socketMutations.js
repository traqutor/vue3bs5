import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setSocketHubConnection]: (state, connection) => {
    state.hubConnection = connection;
  },
  [Mutations.setIsSocketOnline]: (state) => {
    state.isSocketOnline = navigator.onLine;
  },
  [Mutations.setIsSocketReconnecting]: (state, flag) => {
    state.isSocketReconnecting = flag;
  },
};
