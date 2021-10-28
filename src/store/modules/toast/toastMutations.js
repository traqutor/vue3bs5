import { Mutations } from "@/store/enums/EnumTypes";
import { guidsGetOne } from "@/services/guids.service";

export default {
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
