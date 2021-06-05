import layoutMutations from './mutations.js';
import layoutActions from './actions.js';
import layoutGetters from './getters.js';

import { VISIBILITIES } from '@/const';

const layoutModule = {
  state() {
    return {
      asideLeftVisibility: VISIBILITIES.SET,
      asideRightVisibility: VISIBILITIES.SET,
    };
  },

  mutations: layoutMutations,
  actions: layoutActions,
  getters: layoutGetters,
};

export default layoutModule;
