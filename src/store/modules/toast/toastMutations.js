import { Mutations } from "@/store/enums/EnumTypes";
import { guidsGetOne } from "@/services/guids.service";
import { initialState } from "@/store/modules/toast";

export default {
  [Mutations.cleanToastState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.displayNotification](state, payload) {
    state.notifications = [
      ...state.notifications,
      { ...payload, id: guidsGetOne() },
    ];
  },

  [Mutations.removeNotification](state) {
    const notifications = [...state.notifications];
    notifications.shift();
    state.notifications = [...notifications];
  },
};
