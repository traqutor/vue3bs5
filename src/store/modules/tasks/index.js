import Mutations from "./tasksMutations";
import Actions from "./tasksActions";
import Getters from "./tasksGetters";
import {TASKS_BOARD_VIEW_MODES, TASKS_VIEW_MODES} from "@/store/enums/EnumTypes";

const taskTypesModule = {
  state() {
    return {
      tasks: [],
      isTasksLoading: false,
      viewMode: TASKS_VIEW_MODES.LIST,
      tasksBoardViewMode: TASKS_BOARD_VIEW_MODES.TASKS,
      isTaskDrawerVisible: false,
      selectedTaskTypeCreation: null,
      selectedTaskId: null,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
