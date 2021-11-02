import { Mutations } from "@/store/enums/EnumTypes";
import {initialState} from "@/store/modules/layout";

export default {
  [Mutations.cleanLayoutState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
};
