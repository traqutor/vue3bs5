import { createStore } from "vuex";
import authModule from "@/store/modules/auth";
import conversationsModule from "@/store/modules/conversations";
import layoutModule from "@/store/modules/layout";
import mediaModule from "@/store/modules/media";
import usersModule from "@/store/modules/users";
import socketModule from "@/store/modules/socket";
import templateModule from "@/store/modules/templates";
import taskTypesModule from "@/store/modules/taskTypes";

const store = createStore({
  modules: {
    auth: authModule,
    conversations: conversationsModule,
    layout: layoutModule,
    media: mediaModule,
    users: usersModule,
    socket: socketModule,
    templates: templateModule,
    taskTypes: taskTypesModule,
  },
});

export default store;
