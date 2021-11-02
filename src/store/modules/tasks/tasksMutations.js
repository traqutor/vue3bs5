import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/tasks";

export default {
  [Mutations.cleanTasksState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setRequestedTasks]: (state, tasks) => {
    state.requestedTasks = tasks;
  },

  [Mutations.setMyTasks]: (state, tasks) => {
    state.myTasks = tasks;
  },

  [Mutations.setUnassignedTasks]: (state, tasks) => {
    state.unassignedTasks = tasks;
  },

  [Mutations.setMyCompletedTasks]: (state, tasks) => {
    state.myCompletedTasks = tasks;
  },

  [Mutations.setRequestedCompletedTasks]: (state, tasks) => {
    state.requestedCompletedTasks = tasks;
  },

  //loading booleans flag
  [Mutations.setIsRequestedTasksLoading]: (state, flag) => {
    state.isRequestedTasksLoading = flag;
  },

  [Mutations.setIsMyTasksLoading]: (state, flag) => {
    state.isMyTasksLoading = flag;
  },

  [Mutations.setIsUnassignedTasksLoading]: (state, flag) => {
    state.isUnassignedTasksLoading = flag;
  },

  [Mutations.setIsMyCompletedTasksLoading]: (state, flag) => {
    state.isMyCompletedTasksLoading = flag;
  },

  [Mutations.setIsRequestedCompletedTasksLoading]: (state, flag) => {
    state.isRequestedCompletedTasksLoading = flag;
  },

  //selections
  [Mutations.setSelectedTaskTypeCreation]: (state, type) => {
    state.selectedTaskTypeCreation = type;
  },

  [Mutations.setSelectedTaskId]: (state, taskId) => {
    state.selectedTaskId = taskId;
  },

  [Mutations.setUpdatedTask]: (state, task) => {
    const tasks = [...state.unassignedTasks];
    const idx = tasks.findIndex((item) => item.id === task.id);
    if (idx !== -1) {
      tasks[idx] = task;
    } else {
      tasks.unshift(task);
    }

    state.unassignedTasks = [...tasks];
  },

  // views
  [Mutations.setTasksViewMode]: (state, mode) => {
    state.viewMode = mode;
  },

  [Mutations.setTasksBoardViewMode]: (state, mode) => {
    state.tasksBoardViewMode = mode;
  },

  [Mutations.setIsTaskDrawerVisible]: (state, flag) => {
    state.isTaskDrawerVisible = flag;
  },
};
