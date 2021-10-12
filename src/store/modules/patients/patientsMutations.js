import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setPatients](state, patients) {
    state.patients = patients;
  },
};
