import { createStore } from 'vuex';

import layoutModule from './layout/index';

export default createStore({
  modules: {
    layout: layoutModule,
  },
});
