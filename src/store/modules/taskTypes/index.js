import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";

const taskTypesModule = {
  state() {
    return {
      taskTypes: [],
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
