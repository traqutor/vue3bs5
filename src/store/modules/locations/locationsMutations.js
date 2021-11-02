import { Mutations } from "@/store/enums/EnumTypes";
import {initialState} from "@/store/modules/locations";

export default {
  [Mutations.cleanLocationsState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
  [Mutations.setLocations](state, locations) {
    state.locations = locations;
  },

};
