import { createStore } from "vuex";
import authModule from "@/store/modules/auth";
import conversationsModule from "@/store/modules/conversations";
import layoutModule from "@/store/modules/layout";
import locationsModule from "@/store/modules/locations";
import mediaModule from "@/store/modules/media";
import patientsModule from "@/store/modules/patients";
import settingsModule from "@/store/modules/settings";
import socketModule from "@/store/modules/socket";
import templateModule from "@/store/modules/templates";
import taskTypesModule from "@/store/modules/taskTypes";
import tasksModule from "@/store/modules/tasks";
import toastModule from "@/store/modules/toast";
import soundModule from "@/store/modules/sound";
import usersModule from "@/store/modules/users";

const store = createStore({
  modules: {
    auth: authModule,
    conversations: conversationsModule,
    layout: layoutModule,
    locations: locationsModule,
    media: mediaModule,
    patients: patientsModule,
    settings: settingsModule,
    socket: socketModule,
    templates: templateModule,
    taskTypes: taskTypesModule,
    tasks: tasksModule,
    toast: toastModule,
    sound: soundModule,
    users: usersModule,
  },
});

export default store;
