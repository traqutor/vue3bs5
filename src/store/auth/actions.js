import axios from "axios";
import {getTokenData, getUserFromTokenData, saveTokenData} from "@/services/jwt.service";
import jwt_decode from "jwt-decode";

export default {
    onLogin: ({commit}, authData) => {
        const params = {
            scope: "api1",
            client_id: "ro.client",
            client_secret: "secret",
            grant_type: "password",
            username: authData.username,
            password: authData.password,
            AllowedCorsOrigins: "https://meddy-frontend-app.azurewebsites.net"
        };

        const data = Object.keys(params)
            .map(key => `${key}=${encodeURIComponent(params[key])}`)
            .join("&");

        const options = {
            method: "POST",
            headers: {"content-type": "application/x-www-form-urlencoded"},
            data,
            url: `${process.env.VUE_APP_TOKEN_URL}/connect/token`
        };

        const instance = axios.create({
            withCredentials: false
        });

        return new Promise(resolve => {
            commit("setLoggedIsLoading", true);
            commit("setLoggedError", null);
            instance(options).then(response => {
                commit("setLoggedIsLoading", false);
                if (response.data && response.data.access_token) {
                    saveTokenData(response.data.access_token);

                    const decodedUserData = jwt_decode(response.data.access_token);
                    decodedUserData.SystemRoles = JSON.parse(
                        decodedUserData.SystemRolesJson
                    );
                    commit("setLoggedUser", decodedUserData);

                    // commit(PURGE_SELECTED_CONVERSATION);
                    // dispatch(GET_USERS);
                    // dispatch("getConversations", {refresh: true});

                    resolve();
                } else {
                    commit("setLogOutUser");
                }
            })
                .catch(error => {
                    console.error(error);
                    commit("setLoggedIsLoading", false);
                    commit("setLogOutUser");
                    commit("setLoggedError", "Provided username or password are invalid.");
                });
        });
    },
    onAppInitRecallLoggedUserData: ({commit}) => {
        return new Promise((resolve) => {
            const user = getUserFromTokenData();
            const token = getTokenData();

            if (user && token) {
                commit("setLoggedUser", user);

                // dispatch(GET_USERS);
                // dispatch("getConversations", { refresh: true });

                resolve(user);
            }
        });
    }
}
