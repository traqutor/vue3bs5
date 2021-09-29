import { Mutations } from "@/store/enums/EnumTypes";

export default {
  //tasks lists
  [Mutations.setTasksList]: (state, tasks) => {
    state.tasks = tasks;
  },
  [Mutations.setMyTasks]: (state, tasks) => {
    state.myTasks = tasks;
  },
  [Mutations.setRequestedTasks]: (state, tasks) => {
    state.requestedTasks = tasks;
  },
  [Mutations.setCompletedTasks]: (state, tasks) => {
    state.completedTasks = tasks;
  },

  //loading booleans flag
  [Mutations.setIsTasksLoading]: (state, flag) => {
    state.isTasksLoading = flag;
  },
  [Mutations.setIsMyTasksLoading]: (state, flag) => {
    state.isMyTasksLoading = flag;
  },
  [Mutations.setIsRequestedTasksLoading]: (state, flag) => {
    state.isRequestedTasksLoading = flag;
  },
  [Mutations.setIsCompletedTasksLoading]: (state, flag) => {
    state.isCompletedTasksLoading = flag;
  },

  //selections
  [Mutations.setSelectedTaskTypeCreation]: (state, type) => {
    state.selectedTaskTypeCreation = type;
  },
  [Mutations.setSelectedTaskId]: (state, taskId) => {
    state.selectedTaskId = taskId;
  },
  [Mutations.setUpdatedTask]: (state, task) => {
    const tasks = [...state.tasks];
    const idx = tasks.findIndex((item) => item.id === task.id);
    if (idx !== -1) {
      tasks[idx] = task;
    } else {
      tasks.unshift(task);
    }

    state.tasks = [...tasks];
  },

  // views
  [Mutations.setTasksViewMode]: (state, mode) => {
    state.viewMode = mode;
  },
  [Mutations.setTasksBoardViewMode]: (state, mode) => {
    state.tasksBoardViewMode = mode;
  },
  [Mutations.setIsTaskDrawerVisible]: (state, flag) => {
    state.isTaskDrawerVisible = flag;
  },
};
