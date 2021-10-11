import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setLocations](state, locations) {
    state.locations = locations;
  },
};
