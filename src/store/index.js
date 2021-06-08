import { createStore } from 'vuex';

import authModule from "@/store/auth";
import layoutModule from '@/store/layout';

export default createStore({
  modules: {
    auth: authModule,
    layout: layoutModule,
  },
});
