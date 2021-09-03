import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setTaskTypes]: (state, types) => {
    state.taskTypes = types;
  },
  [Mutations.setTaskTypesViewMode]: (state, mode) => {
    state.viewMode = mode;
  },
  [Mutations.setSelectedTaskType]: (state, taskType) => {
    state.selectedTaskType = taskType;
  },
};
