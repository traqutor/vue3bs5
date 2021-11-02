import Getters from "./patientsGetters";
import Mutations from "./patientsMutations";
import Actions from "./patientsActions";

export const initialState = () => ({
  patients: [],
});

const patientsModule = {
  state: initialState(),

  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default patientsModule;
