import Mutations from "./tasksMutations";
import Actions from "./tasksActions";
import Getters from "./tasksGetters";
import { TASKS_VIEW_MODES } from "@/store/enums/EnumTypes";

const taskTypesModule = {
  state() {
    return {
      tasks: [],
      isTasksLoading: false,
      viewMode: TASKS_VIEW_MODES.LIST,
      isTaskDrawerVisible: false,
      selectedTaskTypeCreation: null
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
