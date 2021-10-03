import { Mutations } from "@/store/enums/EnumTypes";
import {getUID} from "bootstrap/js/src/util";

export default {
  [Mutations.displayNotification](state, payload) {
    console.log('Mutations.displayNotification', payload);
    state.notifications = [
      ...state.notifications,
      { ...payload, id: getUID() },
    ];
  },
  [Mutations.removeNotification](state) {
    const notifications = [...state.notifications];
    notifications.shift();
    state.notifications = [...notifications];
  },
};
