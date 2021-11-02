import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/taskTypes";

export default {
  [Mutations.cleanTaskTypesState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setTaskTypes]: (state, types) => {
    state.taskTypes = types;
  },

  [Mutations.setTaskTypesViewMode]: (state, mode) => {
    state.viewMode = mode;
  },

  [Mutations.setSelectedTaskType]: (state, taskType) => {
    state.selectedTaskType = taskType;
  },

  [Mutations.setTaskTypesCustomFields]: (state, fields) => {
    state.customFields = fields;
  },

  [Mutations.setTaskTypesRequiredActions]: (state, actions) => {
    state.requiredActions = actions;
  },

  [Mutations.setIsTypesLoading]: (state, flag) => {
    state.isTypesLoading = flag;
  },

  [Mutations.setIsTypePost]: (state, flag) => {
    state.isTypePost = flag;
  },
};
