import { Mutations, Actions } from "@/store/enums/EnumTypes";

export default {
  async [Actions.onDisplayNotification]({ dispatch, commit }, payload) {
    commit(Mutations.displayNotification, payload);
    await new Promise((resolve) => setTimeout(() => resolve(), 6000));
    dispatch(Actions.onRemoveNotification);
  },

  [Actions.onRemoveNotification]({ commit }) {
    commit(Mutations.removeNotification);
  },
};
