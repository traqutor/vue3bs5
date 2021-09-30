export default {
  getTasks: (state) => {
    return state.tasks;
  },
  getMyTasks: (state) => {
    return state.myTasks;
  },
  getRequestedTasks: (state) => {
    return state.requestedTasks;
  },
  getCompletedTasks: (state) => {
    return state.completedTasks;
  },

  getIsTasksLoading: (state) => {
    return state.isTasksLoading;
  },
  getTasksViewMode: (state) => {
    return state.viewMode;
  },
  getTasksBoardViewMode: (state) => {
    return state.tasksBoardViewMode;
  },
  getIsTaskDrawerVisible: (state) => {
    return state.isTaskDrawerVisible;
  },
  getSelectedTaskTypeCreation: (state) => {
    return state.selectedTaskTypeCreation;
  },
  getSelectedTaskId: (state) => {
    return state.selectedTaskId;
  },
  getSelectedTask: (state, getters) => {
    return state.tasks.find(
      (task) =>
        getters.getSelectedTaskId && task.id === getters.getSelectedTaskId
    );
  },
};
