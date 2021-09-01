import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetTaskTypes]: ({ commit }) => {
    const url = `${process.env.VUE_APP_BASE_URL}/api/TaskTypes/GetTypes?Page=1`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.response.isOk) {
          commit(Mutations.setTaskTypes, response.data.taskTypes);
        } else {
          console.error(
            "ON onGetTaskTypes error:",
            response.data.response.message
          );
        }
      })
      .catch((error) => {
        console.error("ON onGetTaskTypes error:", error);
      });
  },
};
