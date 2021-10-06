export default {
  // tasks lists
  getRequestedTasks: (state) => {
    return state.requestedTasks;
  },

  getMyTasks: (state) => {
    return state.myTasks;
  },

  getUnassignedTasks: (state) => {
    return state.unassignedTasks;
  },

  getMyCompletedTasks: (state) => {
    return state.myCompletedTasks;
  },

  getRequestedCompletedTasks: (state) => {
    return state.requestedCompletedTasks;
  },

  // tasks loader flags
  getIsRequestedTasksLoading: (state) => {
    return state.isRequestedTasksLoading;
  },

  getIsMyTasksLoading: (state) => {
    return state.isMyTasksLoading;
  },

  getIsUnassignedTasksLoading: (state) => {
    return state.isUnassignedTasksLoading;
  },

  getIsMyCompletedTasksLoading: (state) => {
    return state.isMyCompletedTasksLoading;
  },

  getIsRequestedCompletedTasksLoading: (state) => {
    return state.isRequestedCompletedTasksLoading;
  },

  // tasks view modes
  getTasksViewMode: (state) => {
    return state.viewMode;
  },
  getTasksBoardViewMode: (state) => {
    return state.tasksBoardViewMode;
  },
  getIsTaskDrawerVisible: (state) => {
    return state.isTaskDrawerVisible;
  },

  // tasks creation
  getSelectedTaskTypeCreation: (state) => {
    return state.selectedTaskTypeCreation;
  },

  // tasks selections
  getSelectedTaskId: (state) => {
    return state.selectedTaskId;
  },
  getSelectedTask: (state, getters) => {
    return (
      state.requestedTasks.find(
        (task) =>
          getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
      ) ||
      state.myTasks.find(
        (task) =>
          getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
      ) ||
      state.unassignedTasks.find(
        (task) =>
          getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
      ) ||
      state.myCompletedTasks.find(
        (task) =>
          getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
      ) ||
      state.requestedCompletedTasks.find(
        (task) =>
          getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
      )
    );
  },
};
