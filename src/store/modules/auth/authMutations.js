import { purgeTokenData } from "@/services/jwt.service";
import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/auth/index";

export default {
  [Mutations.setLoggedError]: (state, error) => {
    state.errors = error;
  },

  [Mutations.setLoggedUser]: (state, user) => {
    state.user = { ...user, id: user.sub };
    state.errors = null;
  },

  [Mutations.setLogOutUser]: (state) => {

    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });

    purgeTokenData();
  },

  [Mutations.setLoggedIsLoading]: (state, flag) => {
    state.isLoadingLogin = flag;
  },

  [Mutations.setActiveRole]: (state, role) => {
    state.activeRole = role;
  },
};
