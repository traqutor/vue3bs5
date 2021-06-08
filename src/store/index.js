import { createStore } from 'vuex';

import authModule from "@/store/auth";
import layoutModule from '@/store/layout';
import socketModule from "@/store/socket";

export default createStore({
  modules: {
    auth: authModule,
    layout: layoutModule,
    socket: socketModule,
  },
});
