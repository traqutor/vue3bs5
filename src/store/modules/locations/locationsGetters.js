export default {
  getLocations: (state) => {
    return state.locations;
  },

  getLocationById: (state) => (id) => {
    return state.locations.find((item) => item.id === id);
  },

  getLocationExceptId: (state) => (id) => {
    return state.locations.filter((item) => item.id !== id);
  },
};
