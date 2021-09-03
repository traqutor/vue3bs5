export default {
  getTaskTypes: (state) => {
    return state.taskTypes;
  },
  getTaskTypesViewMode: (state) => {
    return state.viewMode;
  },
  getSelectedTaskType: (state) => {
    return state.selectedTaskType;
  },
};
