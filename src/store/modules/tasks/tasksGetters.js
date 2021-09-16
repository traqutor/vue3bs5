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
  getIsTaskDrawerVisible: (state) => {
    return state.isTaskDrawerVisible;
  },
  getSelectedTaskTypeCreation: (state) => {
    return state.selectedTaskTypeCreation;
  },
  getSelectedTask: (state) => {
    return state.selectedTask;
  },
};
