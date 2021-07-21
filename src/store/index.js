import { createStore } from "vuex";
import authModule from "@/store/auth";
import conversationsModule from "@/store/conversations";
import layoutModule from "@/store/layout";
import mediaModule from "@/store/media";
import usersModule from "@/store/users";
import socketModule from "@/store/socket";

const store = createStore({
  modules: {
    auth: authModule,
    conversations: conversationsModule,
    layout: layoutModule,
    media: mediaModule,
    users: usersModule,
    socket: socketModule,
  },
});

export default store;
