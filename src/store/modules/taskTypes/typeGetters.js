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
  getCustomFields: (state) => {
    return state.customFields;
  },
  getRequiredActions: (state) => {
    return state.requiredActions;
  },
  getIsTypesLoading: (state) => {
    return state.isTypesLoading;
  },
  getIsTypePost: (state) => {
    return state.isTypePost;
  },
};
