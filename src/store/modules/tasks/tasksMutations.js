import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setTasksList]: (state, tasks) => {
    state.tasks = tasks;
  },
  [Mutations.setIsTasksLoading]: (state, flag) => {
    state.isTasksLoading = flag;
  },
  [Mutations.setTasksViewMode]: (state, mode) => {
    state.viewMode = mode;
  },
  [Mutations.setIsTaskDrawerVisible]: (state, flag) => {
    state.isTaskDrawerVisible = flag;
  }
};
