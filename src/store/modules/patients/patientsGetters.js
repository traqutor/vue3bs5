export default {
  getPatients: (state) => {
    return state.patients;
  },

  getPatientById: (state) => (id) => {
    return state.patients.find((item) => item.id === id);
  },
};
