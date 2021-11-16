import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/settings";

export default {
  [Mutations.cleanSocketState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
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
