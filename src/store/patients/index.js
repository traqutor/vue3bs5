import Getters from "./patientsGetters";
import Mutations from "./patientsMutations";
import Actions from "./patientsActions";

const patientsModule = {
  state() {
    return {
      patients: [],
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default patientsModule;
