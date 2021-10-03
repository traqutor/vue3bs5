import { Mutations, Actions } from "@/store/enums/EnumTypes";

export default {
  async [Actions.onDisplayNotification]({ dispatch, commit }, payload) {
    console.log("Actions.onDisplayNotification", payload);

    commit(Mutations.displayNotification, payload);
    await new Promise((resolve) => setTimeout(() => resolve(), 4000));
    dispatch(Actions.onRemoveNotification);
  },
  [Actions.onRemoveNotification]({ commit }) {
    commit(Mutations.removeNotification);
  },
};
