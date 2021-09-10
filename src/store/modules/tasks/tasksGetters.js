export default {
  getTasks: (state) => {
    return state.tasks;
  },
  getIsTasksLoading: (state) => {
    return state.isTasksLoading;
  },
  getTasksViewMode: (state) => {
    return state.viewMode;
  },
};
