import Mutations from "./templateMutations";
import Actions from "./templatesActions";
import Getters from "./templateGetters";
import {
  QUICK_MESSAGES,
  TEMPLATE_VIEW_MODES,
  TEMPLATES,
} from "@/store/enums/EnumTypes";

const socketModule = {
  state() {
    return {
      templates: TEMPLATES,
      quickMessages: QUICK_MESSAGES,
      templateViewMode: TEMPLATE_VIEW_MODES.QUICK_MESSAGE,
      selectedTemplate: TEMPLATES.ISBAR,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default socketModule;
