import { purgeTokenData } from "@/services/jwt.service";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  setLoggedError(state, error) {
    state.errors = error;
  },
  setLoggedUser(state, user) {
    state.user = { ...user, id: user.sub };
    state.errors = null;
  },
  setLogOutUser(state) {
    state.user = null;
    state.errors = null;
    purgeTokenData();
  },
  setLoggedIsLoading: (state, flag) => {
    state.isLoadingLogin = flag;
  },

  [Mutations.setActiveRole]: (state, role) => {
    state.activeRole = role;
  },
};
