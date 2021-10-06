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
      requestedTasks: [],
      myTasks: [],
      unassignedTasks: [],
      myCompletedTasks: [],
      requestedCompletedTasks: [],

      //loading booleans flag
      isRequestedTasksLoading: false,
      isMyTasksLoading: false,
      isUnassignedTasksLoading: false,
      isMyCompletedTasksLoading: false,
      isRequestedCompletedTasksLoading: false,

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
