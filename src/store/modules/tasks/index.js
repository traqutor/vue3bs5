import Mutations from "./tasksMutations";
import Actions from "./tasksActions";
import Getters from "./tasksGetters";
import {
  TASKS_BOARD_VIEW_MODES,
  TASKS_VIEW_MODES,
} from "@/store/enums/EnumTypes";

const taskTypesModule = {
  state() {
    return {
      //tasks lists
      tasks: [],
      myTasks: [],
      requestedTasks: [],
      completedTasks: [],

      //loading booleans flag
      isTasksLoading: false,
      isRequestedTasksLoading: false,
      isMyTasksLoading: false,
      isCompletedTasksLoading: false,

      //selections
      selectedTaskTypeCreation: null,
      selectedTaskId: null,

      // views
      viewMode: TASKS_VIEW_MODES.LIST,
      tasksBoardViewMode: TASKS_BOARD_VIEW_MODES.TASKS,
      isTaskDrawerVisible: false,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
