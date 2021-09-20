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
  },
  [Mutations.setSelectedTaskTypeCreation]: (state, type) => {
    state.selectedTaskTypeCreation = type;
  },
  [Mutations.setSelectedTask]: (state, task) => {
    state.selectedTask = task;
  },
  [Mutations.setUpdatedTask]: (state, task) => {
    console.log("setUpdatedTask", task);
    const tasks = [...state.tasks];
    const idx = tasks.findIndex((item) => item.id === task.id);
    if (idx !== -1) {
      tasks[idx] = task;
      state.tasks = [...tasks];
    }
  },
};
