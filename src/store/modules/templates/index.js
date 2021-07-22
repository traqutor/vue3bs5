import Mutations from "./mutations";
import Actions from "./actions";
import Getters from "./getters";
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
