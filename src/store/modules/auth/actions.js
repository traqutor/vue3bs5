import axios from "axios";
import {
  getTokenData,
  getUserFromTokenData,
  saveTokenData,
} from "@/services/jwt.service";
import jwt_decode from "jwt-decode";
import { Actions, Mutations } from "@/store/enums/EnumTypes";

export default {
  onLogin: ({ commit }, authData) => {
    commit(Mutations.setLoggedIsLoading, true);

    const params = {
      scope: "api1",
      client_id: "ro.client",
      client_secret: "secret",
      grant_type: "password",
      username: authData.username,
      password: authData.password,
      AllowedCorsOrigins: "https://meddy-frontend-app.azurewebsites.net",
    };

    const data = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");

    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data,
      url: `${process.env.VUE_APP_TOKEN_URL}/connect/token`,
    };

    const instance = axios.create({
      withCredentials: false,
    });

    return new Promise((resolve) => {
      commit(Mutations.setLoggedError, null);
      instance(options)
        .then((response) => {
          commit(Mutations.setLoggedIsLoading, false);
          if (response.data && response.data.access_token) {
            saveTokenData(response.data.access_token);

            const decodedUserData = jwt_decode(response.data.access_token);
            decodedUserData.SystemRoles = JSON.parse(
              decodedUserData.SystemRolesJson
            );
            commit(Mutations.setLoggedUser, decodedUserData);
            commit(Mutations.setActiveRole, decodedUserData.SystemRoles[0]);
            commit("setSelectedCreator", decodedUserData);

            resolve();
          } else {
            commit(Mutations.setLogOutUser);
          }
        })
        .catch((error) => {
          console.error(error);
          commit(Mutations.setLoggedIsLoading, false);
          commit(Mutations.setLogOutUser);
          commit(
            Mutations.setLoggedError,
            "Provided username or password are invalid."
          );
        });
    });
  },

  onAppInitRecallLoggedUserData: ({ commit, dispatch }) => {
    return new Promise((resolve) => {
      const user = getUserFromTokenData();
      const token = getTokenData();

      if (user && token) {
        commit(Mutations.setLoggedUser, user);
        commit(Mutations.setActiveRole, user.SystemRoles[0]);
        commit("setSelectedCreator", user);

        dispatch("getUsers");
        dispatch("onGetConversations", { refresh: true });
        dispatch(Actions.onGetThumbnails);

        resolve(user);
      }
    });
  },
};
