import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/settings";

export default {
  [Mutations.cleanSettingsState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },
};
