import axios from "axios";
import { axiosWebApiInstance } from "@/services/axios.service";
let getUsersSource = null;

export default {
    getUsers: ({ commit }) => {
        if (getUsersSource) {
            getUsersSource.cancel();
        }

        getUsersSource = axios.CancelToken.source();
        const url = `${process.env.VUE_APP_BASE_URL}/Users/Get`;

        axiosWebApiInstance
            .get(url, { cancelToken: getUsersSource.token })
            .then(function(response) {
                getUsersSource = null;
                commit("setUsers", response.data.users);
                commit("setRoles", response.data.roles);
            });
    }

}
