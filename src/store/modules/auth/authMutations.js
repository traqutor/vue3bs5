import { purgeTokenData } from "@/services/jwt.service";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setLoggedError]: (state, error) => {
    state.errors = error;
  },

  [Mutations.setLoggedUser]: (state, user) => {
    state.user = { ...user, id: user.sub };
    state.errors = null;
  },

  [Mutations.setLogOutUser]: (state) => {
    state.user = null;
    state.errors = null;
    purgeTokenData();
  },

  [Mutations.setLoggedIsLoading]: (state, flag) => {
    state.isLoadingLogin = flag;
  },

  [Mutations.setActiveRole]: (state, role) => {
    state.activeRole = role;
  },
};
