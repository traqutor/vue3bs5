import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/patients";

export default {
  [Mutations.cleanPatientsState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setPatients](state, patients) {
    state.patients = patients;
  },
};
