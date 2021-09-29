import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetTaskList]: ({ commit }) => {
    commit(Mutations.setIsTasksLoading, true);

    const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/GetTaskList`;

    axiosWebApiInstance
      .get(url, {
        params: {
          activeRoleIds: [],
        },
      })
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setTasksList, response.data.tasks);
        } else {
          console.error("onGetTaskList error:", response.data.response.message);
        }
        commit(Mutations.setIsTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsTasksLoading, false);
        console.error("onGetTaskList error:", error);
      });
  },

  [Actions.onGetMyTasks]: ({ commit }) => {
    commit(Mutations.setIsMyTasksLoading, true);

    const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/GetMyTasks`;

    axiosWebApiInstance
      .get(url, {
        params: {
          activeRoleIds: [],
        },
      })
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

  [Actions.onGetRequestedTasks]: ({ commit }) => {
    commit(Mutations.setIsRequestedTasksLoading, true);

    const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/GetRequestedTasks`;

    axiosWebApiInstance
      .get(url, {
        params: {
          page: 1,
          activeRoleIds: [],
        },
      })
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

  [Actions.onGetCompletedTasks]: ({ commit }) => {
    commit(Mutations.setIsCompletedTasksLoading, true);

    const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/GetCompletedTasks`;

    axiosWebApiInstance
      .get(url, {
        params: {
          page: 1,
          activeRoleIds: [],
        },
      })
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setTasksList, response.data.tasks);
        } else {
          console.error(
            "onGetCompletedTask error:",
            response.data.response.message
          );
        }
        commit(Mutations.setIsCompletedTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsCompletedTasksLoading, false);
        console.error("onGetCompletedTask error:", error);
      });
  },

  [Actions.onCreateTask]: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/CreateTask`;

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          if (response.data.isOk) {
            dispatch(Actions.onGetTaskList);
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
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/StartTask`;

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
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/OnHoldTask`;

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
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/QueueTask`;

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
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/CompleteTask`;

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
      const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/ReturnTask`;

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
};
