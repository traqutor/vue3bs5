import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetRequestedTasks]: ({ commit, getters }) => {
    commit(Mutations.setIsRequestedTasksLoading, true);

    const page = 0;

    let url = `${process.env.VUE_APP_BASE_URL}/Tasks/GetRequestedTasks?page=${page}`;

    const activeRoleIds = getters.getLoggedUser.SystemRoles.map(
      (role, index) => {
        return `&activeRoleIds[${index}]=${role.Id}`;
      }
    ).join("");

    url = url + activeRoleIds;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setRequestedTasks, response.data.tasks);
        } else {
          console.error(
            "onGetRequestedTasks error:",
            response.data.response.message
          );
        }
        commit(Mutations.setIsRequestedTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsRequestedTasksLoading, false);
        console.error("onGetRequestedTasks error:", error);
      });
  },

  [Actions.onGetMyTasks]: ({ commit, getters }) => {
    commit(Mutations.setIsMyTasksLoading, true);

    let url = `${process.env.VUE_APP_BASE_URL}/Tasks/GetMyTasks`;
    const activeRoleIds = getters.getLoggedUser.SystemRoles.map(
      (role, index) => {
        return `${index === 0 ? "?" : "&"}activeRoleIds[${index}]=${role.Id}`;
      }
    ).join("");

    url = url + activeRoleIds;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setMyTasks, response.data.tasks);
        } else {
          console.error("onGetMyTasks error:", response.data.response.message);
        }
        commit(Mutations.setIsMyTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsMyTasksLoading, false);
        console.error("onGetMyTasks error:", error);
      });
  },

  [Actions.onGetUnassignedTasks]: ({ commit, getters }) => {
    commit(Mutations.setIsUnassignedTasksLoading, true);

    const page = 1;
    let url = `${process.env.VUE_APP_BASE_URL}/Tasks/GetUnassignedTasks?page=${page}`;

    const activeRoleIds = getters.getLoggedUser.SystemRoles.map(
      (role, index) => {
        return `&activeRoleIds[${index}]=${role.Id}`;
      }
    ).join("");

    url = url + activeRoleIds;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setUnassignedTasks, response.data.tasks);
        } else {
          console.error(
            "onGetUnassignedTasks error:",
            response.data.response.message
          );
        }
        commit(Mutations.setIsUnassignedTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsUnassignedTasksLoading, false);
        console.error("onGetUnassignedTasks error:", error);
      });
  },

  [Actions.onGetMyCompletedTasks]: ({ commit, getters }) => {
    commit(Mutations.setIsMyCompletedTasksLoading, true);

    const page = 1;

    let url = `${process.env.VUE_APP_BASE_URL}/Tasks/GetMyCompletedTasks?page=${page}`;

    const activeRoleIds = getters.getLoggedUser.SystemRoles.map(
      (role, index) => {
        return `&activeRoleIds[${index}]=${role.Id}`;
      }
    ).join("");

    url = url + activeRoleIds;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setMyCompletedTasks, response.data.tasks);
        } else {
          console.error(
            "onGetMyCompletedTasks error:",
            response.data.response.message
          );
        }
        commit(Mutations.setIsMyCompletedTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsMyCompletedTasksLoading, false);
        console.error("onGetMyCompletedTasks error:", error);
      });
  },

  [Actions.onGetRequestedCompletedTasks]: ({ commit, getters }) => {
    commit(Mutations.setIsRequestedCompletedTasksLoading, true);

    const page = 1;

    let url = `${process.env.VUE_APP_BASE_URL}/Tasks/GetRequestedCompletedTasks?page=${page}`;

    const activeRoleIds = getters.getLoggedUser.SystemRoles.map(
      (role, index) => {
        return `&activeRoleIds[${index}]=${role.Id}`;
      }
    ).join("");

    url = url + activeRoleIds;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setRequestedCompletedTasks, response.data.tasks);
        } else {
          console.error(
            "onGetRequestedCompletedTasks error:",
            response.data.response.message
          );
        }
        commit(Mutations.setIsRequestedCompletedTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsRequestedCompletedTasksLoading, false);
        console.error("onGetRequestedCompletedTasks error:", error);
      });
  },

  [Actions.onCreateTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/CreateTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          console.log("response", response);
          if (response.data.isOk) {
            dispatch(Actions.onGetRequestedTasks);
            resolve();
          } else {
            console.error("onCreateTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onCreateTask error:", error);
          reject();
        });
    });
  },

  [Actions.onSelectTask]: ({ commit, dispatch, getters }, taskId) => {
    return new Promise(() => {
      commit(Mutations.setSelectedTaskId, taskId);
      const conversationId = getters.getSelectedTask.conversationId;
      if (conversationId) {
        dispatch(Actions.onGetConversation, conversationId);
      }
    });
  },

  [Actions.onStartTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/StartTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
            resolve();
          } else {
            console.error("onStartTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onStartTask error:", error);
          reject();
        });
    });
  },

  [Actions.onOnHoldTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/OnHoldTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
            resolve();
          } else {
            console.error("onOnHoldTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onOnHoldTask error:", error);
          reject();
        });
    });
  },

  [Actions.onQueueTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/QueueTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
            resolve();
          } else {
            console.error("onQueueTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onQueueTask error:", error);
          reject();
        });
    });
  },

  [Actions.onCompleteTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/CompleteTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          console.log(response);
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
            resolve();
          } else {
            console.error("onCompleteTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onCompleteTask error:", error);
          reject();
        });
    });
  },

  [Actions.onReturnTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Tasks/ReturnTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          console.log(response);
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
            resolve();
          } else {
            console.error("onReturnTask error:", response.data.message);
            reject();
          }
        })
        .catch((error) => {
          console.error("onReturnTask error:", error);
          reject();
        });
    });
  },

  // tasks notification related actions
  [Actions.onTaskCreatedNotification]: ({ commit, dispatch }, task) => {
    console.log("onTaskCreatedNotification", task);
    dispatch(Actions.onDisplayNotification, {
      text: task.title + "created",
      backgroundColor: task.badgeColor,
    });
    commit(Mutations.setUpdatedTask, task);
  },

  [Actions.onTaskStatusChangedNotification]: ({ commit, dispatch }, task) => {
    dispatch(Actions.onDisplayNotification, {
      text: "Task updated",
      backgroundColor: "green",
    });
    console.log("onTaskStatusChangedNotification", task);
  },

  [Actions.onTaskDeadlineCountdownStartedNotification]: (
    { commit, dispatch },
    task
  ) => {
    dispatch(Actions.onDisplayNotification, {
      text: "Task updated",
      backgroundColor: "green",
    });
    console.log("onTaskDeadlineCountdownStartedNotification", task);
  },

  [Actions.onTaskDeadlinePassedNotification]: ({ commit, dispatch }, task) => {
    dispatch(Actions.onDisplayNotification, {
      text: "Task updated",
      backgroundColor: "green",
    });
    console.log("onTaskDeadlinePassedNotification", task);
  },

  [Actions.onGroupTaskUpdateNotification]: ({ commit, dispatch }, group) => {
    dispatch(Actions.onDisplayNotification, {
      text: "Task updated",
      backgroundColor: "green",
    });
    console.log("onGroupTaskUpdateNotification", group);
  },

  [Actions.onTaskDeletedNotification]: ({ commit, dispatch }, task) => {
    dispatch(Actions.onDisplayNotification, {
      text: task.title + "updated",
      backgroundColor: "red",
    });
    console.log("onTaskDeletedNotification", task);
  },
};
