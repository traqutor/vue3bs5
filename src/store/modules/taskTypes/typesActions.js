import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetTypes]: ({ commit }) => {
    commit(Mutations.setIsTypesLoading, true);

    const page = 1;
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/GetTypes?page=${page}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setTaskTypes, response.data.taskTypes);
        } else {
          console.error("onGetTypes error:", response.data.response.message);
        }
        commit(Mutations.setIsTypesLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsTypesLoading, false);
        console.error("onGetTypes error:", error);
      });
  },

  [Actions.onCreateType]: ({ commit }, type) => {
    return new Promise((resolve) => {
      commit(Mutations.setIsTypePost, true);

      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/CreateType`;

      axiosWebApiInstance
        .post(url, type)
        .then(function (response) {
          if (response.data.isOk) {
            resolve();
          } else {
            console.error("onCreateType error:", response.data.message);
          }
          commit(Mutations.setIsTypePost, false);
        })
        .catch((error) => {
          commit(Mutations.setIsTypePost, false);
          console.error("onCreateType error:", error);
        });
    });
  },

  [Actions.onUpdateType]: ({ commit }, type) => {
    return new Promise((resolve) => {
      commit(Mutations.setIsTypePost, true);

      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/UpdateType`;

      axiosWebApiInstance
        .post(url, type)
        .then(function (response) {
          if (response.data.isOk) {
            resolve();
          } else {
            console.error("onUpdateType error:", response.data.message);
          }
          commit(Mutations.setIsTypePost, false);
        })
        .catch((error) => {
          commit(Mutations.setIsTypePost, false);
          console.error("onUpdateType error:", error);
        });
    });
  },

  [Actions.onSearchTypes]: () => {},

  [Actions.onDeleteTypes]: ({ commit, getters }, typeIds) => {
    return new Promise((resolve) => {
      commit(Mutations.setIsTypePost, true);

      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/UpdateType`;

      axiosWebApiInstance
        .delete(url, { data: { typeIds } })
        .then(function (response) {
          console.log("onDeleteTypes response:", response);
          if (response.data.isOk) {
            const types = getters.getTaskTypes;
            typeIds.forEach((typeId) => {
              const idx = types.indexOf((typ) => typ.id === typeId);
              if (idx !== -1) {
                types.splice(idx, 1);
              }
            });
            commit(Mutations.setTaskTypes, types);

            resolve();
          } else {
            console.error("onDeleteTypes error:", response.data.message);
          }
          commit(Mutations.setIsTypePost, false);
        })
        .catch((error) => {
          commit(Mutations.setIsTypePost, false);
          console.error("onDeleteTypes error:", error);
        });
    });
  },

  [Actions.onUpdateRequiredParticipantsToType]: (
    { commit, getters },
    { typeId, taskRequiredParticipants }
  ) => {
    return new Promise((resolve) => {
      commit(Mutations.setIsTypePost, true);

      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/UpdateRequiredParticipantsToType`;

      axiosWebApiInstance
        .post(url, { typeId, taskRequiredParticipants })
        .then(function (response) {
          console.log("onUpdateRequiredParticipantsToType response:", response);
          if (response.data.isOk) {
            const types = getters.getTaskTypes;
            const idx = types.indexOf((typ) => typ.id === typeId);
            if (idx !== -1) {
              types[idx].requiredParticipants = taskRequiredParticipants;

              commit(Mutations.setTaskTypes, types);
            }

            resolve();
          } else {
            console.error(
              "onUpdateRequiredParticipantsToType error:",
              response.data.message
            );
          }
          commit(Mutations.setIsTypePost, false);
        })
        .catch((error) => {
          commit(Mutations.setIsTypePost, false);
          console.error("onUpdateRequiredParticipantsToType error:", error);
        });
    });
  },

  [Actions.onAddCustomFieldsToType]: (_, { typeId, ids }) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/AddCustomFieldsToType`;

      axiosWebApiInstance
        .post(url, { typeId, ids })
        .then(function (response) {
          if (response.data.isOk) {
            resolve();
          } else {
            console.error(
              "onAddCustomFieldsToType error:",
              response.data.message
            );
            reject();
          }
        })
        .catch((error) => {
          console.error("onAddCustomFieldsToType error:", error);
          reject();
        });
    });
  },

  [Actions.onAddRequiredActionsToType]: (_, { typeId, ids }) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/AddRequiredActionsToType`;

      axiosWebApiInstance
        .post(url, { typeId, ids })
        .then(function (response) {
          if (response.data.isOk) {
            resolve();
          } else {
            console.error(
              "onAddRequiredActionsToType error:",
              response.data.message
            );
            reject();
          }
        })
        .catch((error) => {
          console.error("onAddRequiredActionsToType error:", error);
          reject();
        });
    });
  },

  [Actions.onRemoveRequiredParticipantsFromType]: (
    { commit, getters },
    { typeId, ids }
  ) => {
    return new Promise((resolve) => {
      commit(Mutations.setIsTypePost, true);

      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/RemoveRequiredParticipantsFromType`;

      axiosWebApiInstance
        .delete(url, {
          data: {
            typeId,
            ids,
          },
        })
        .then((response) => {
          console.log(
            "onRemoveRequiredParticipantsFromType response:",
            response
          );
          if (response.data.isOk) {
            const types = getters.getTaskTypes;

            const idx = types.indexOf((typ) => typ.id === typeId);
            if (idx !== -1) {
              types[idx].requiredParticipants = types[
                idx
              ].requiredParticipants.filter((field) => {
                return ids.filter((id) => id !== field.id);
              });

              commit(Mutations.setTaskTypes, types);
            }

            resolve();
          } else {
            console.error(
              "onRemoveRequiredParticipantsFromType error:",
              response.data.message
            );
          }
          commit(Mutations.setIsTypePost, false);
        })
        .catch((error) => {
          commit(Mutations.setIsTypePost, false);
          console.error("onRemoveRequiredParticipantsFromType error:", error);
        });
    });
  },

  [Actions.onRemoveCustomFieldsFromType]: (_, { typeId, ids }) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/RemoveCustomFieldsFromType`;

      axiosWebApiInstance
        .post(url, { typeId, ids })
        .then(function (response) {
          console.log("onRemoveCustomFieldsFromType response:", response);

          if (response.data.isOk) {
            resolve();
          } else {
            console.error(
              "onRemoveCustomFieldsFromType error:",
              response.data.message
            );
            reject();
          }
        })
        .catch((error) => {
          console.error("onRemoveCustomFieldsFromType error:", error);
          reject();
        });
    });
  },

  [Actions.onRemoveRequiredActionsFromType]: (_, { typeId, ids }) => {
    return new Promise((resolve, reject) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/RemoveRequiredActionsFromType`;

      axiosWebApiInstance
        .post(url, { typeId, ids })
        .then(function (response) {
          console.log("onRemoveRequiredActionsFromType response:", response);

          if (response.data.isOk) {
            resolve();
          } else {
            console.error(
              "onRemoveRequiredActionsFromType error:",
              response.data.message
            );
            reject();
          }
        })
        .catch((error) => {
          console.error("onRemoveRequiredActionsFromType error:", error);
          reject();
        });
    });
  },

  [Actions.onAddRequiredActions]: ({ commit }, actions) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/AddRequiredActions`;

      axiosWebApiInstance
        .post(url, actions)
        .then(function (response) {
          console.log("onAddRequiredActions response:", response);

          if (response.data.isOk) {
            commit(
              Mutations.setTaskTypesRequiredActions,
              response.data.requiredActions
            );

            resolve();
          } else {
            console.error("onAddRequiredActions error:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("onAddRequiredActions error:", error);
        });
    });
  },

  [Actions.onAddCustomFields]: ({ commit }, fields) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/AddCustomFields`;

      axiosWebApiInstance
        .post(url, fields)
        .then(function (response) {
          console.log("onAddCustomFields response:", response);

          if (response.data.isOk) {
            commit(
              Mutations.setTaskTypesCustomFields,
              response.data.customFields
            );

            resolve();
          } else {
            console.error("onAddCustomFields error:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("onAddCustomFields error:", error);
        });
    });
  },

  [Actions.onDeleteRequiredActions]: ({ commit }, actions) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/DeleteRequiredActions`;

      axiosWebApiInstance
        .delete(url, { data: [...actions] })
        .then(function (response) {
          console.log("onDeleteRequiredActions response:", response);

          if (response.data.isOk) {
            commit(
              Mutations.setTaskTypesRequiredActions,
              response.data.requiredActions
            );

            resolve();
          } else {
            console.error(
              "onDeleteRequiredActions error:",
              response.data.message
            );
          }
        })
        .catch((error) => {
          console.error("onDeleteRequiredActions error:", error);
        });
    });
  },

  [Actions.onDeleteCustomFields]: ({ commit }, fields) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/DeleteCustomFields`;

      axiosWebApiInstance
        .delete(url, { data: [...fields] })
        .then(function (response) {
          console.log("onDeleteCustomFields response:", response);

          if (response.data.isOk) {
            commit(
              Mutations.setTaskTypesCustomFields,
              response.data.customFields
            );

            resolve();
          } else {
            console.error("onDeleteCustomFields error:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("onDeleteCustomFields error:", error);
        });
    });
  },

  [Actions.onSearchRequiredActions]: ({ commit }) => {
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/SearchRequiredActions`;

    axiosWebApiInstance
      .post(url, {
        page: 1,
        query: "",
      })
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(
            Mutations.setTaskTypesRequiredActions,
            response.data.requiredActions
          );
        } else {
          console.error(
            "onSearchRequiredActions error:",
            response.data.response.message
          );
        }
      })
      .catch((error) => {
        console.error("onSearchRequiredActions error:", error);
      });
  },

  [Actions.onSearchCustomFields]: ({ commit }) => {
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/SearchCustomFields`;

    axiosWebApiInstance
      .post(url, {
        page: 1,
        query: "",
      })
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(
            Mutations.setTaskTypesCustomFields,
            response.data.customFields
          );
        } else {
          console.error(
            "onSearchCustomFields error:",
            response.data.response.message
          );
        }
      })
      .catch((error) => {
        console.error("onSearchCustomFields error:", error);
      });
  },

  [Actions.onGetCustomFields]: ({ commit }) => {
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/GetCustomFields?Page=1`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(
            Mutations.setTaskTypesCustomFields,
            response.data.customFields
          );
        } else {
          console.error(
            "ON onGetCustomFields error:",
            response.data.response.message
          );
        }
      })
      .catch((error) => {
        console.error("ON onGetCustomFields error:", error);
      });
  },

  [Actions.onGetRequiredActions]: ({ commit }) => {
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes//GetRequiredActions?Page=1`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(
            Mutations.setTaskTypesRequiredActions,
            response.data.customFields
          );
        } else {
          console.error(
            "ON onGetCustomFields error:",
            response.data.response.message
          );
        }
      })
      .catch((error) => {
        console.error("ON onGetCustomFields error:", error);
      });
  },

  // tasks related notification actions
  [Actions.onTaskCreatedNotification]: ({ commit }, task) => {
    console.log("onTaskCreatedNotification", task);
    commit(Mutations.setUpdatedTask, task);
  },
};
