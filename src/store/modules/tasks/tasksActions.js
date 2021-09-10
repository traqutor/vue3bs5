import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetTaskList]: ({ commit }) => {
    commit(Mutations.setIsTasksLoading, true);

    const url = `${process.env.VUE_APP_BASE_URL}/api/Tasks/GetTaskList`;

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
          console.error("onGetTaskList error:", response.data.response.message);
        }
        commit(Mutations.setIsTasksLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsTasksLoading, false);
        console.error("onGetTaskList error:", error);
      });
  },
};
