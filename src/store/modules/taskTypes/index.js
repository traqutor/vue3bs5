import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";
import { TASK_TYPES_VIEW_MODES } from "@/store/enums/EnumTypes";

const taskTypesModule = {
  state() {
    return {
      taskTypes: [],
      selectedTaskType: null,
      viewMode: TASK_TYPES_VIEW_MODES.LIST,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
