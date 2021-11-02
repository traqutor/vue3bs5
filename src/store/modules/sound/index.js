import soundActions from "./soundActions";
import soundGetters from "./soundGetters";
import soundMutations from "./soundMutations";

export const initialState = () => ({
  soundEffect: null,
});

const playModule = {
  state: initialState(),

  actions: soundActions,
  getters: soundGetters,
  mutations: soundMutations,
};

export default playModule;
