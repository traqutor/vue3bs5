import soundActions from "./soundActions";
import soundGetters from "./soundGetters";
import soundMutations from "./soundMutations";

const playModule = {
  state() {
    return {
      soundEffect: null,
    };
  },

  actions: soundActions,
  getters: soundGetters,
  mutations: soundMutations,
};

export default playModule;
