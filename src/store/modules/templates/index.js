import Mutations from "./templateMutations";
import Actions from "./templatesActions";
import Getters from "./templateGetters";
import {
  QUICK_MESSAGES,
  TEMPLATE_VIEW_MODES,
  TEMPLATES,
} from "@/store/enums/EnumTypes";

export const initialState = () => ({
  templates: TEMPLATES,
  quickMessages: QUICK_MESSAGES,
  templateViewMode: TEMPLATE_VIEW_MODES.QUICK_MESSAGE,
  selectedTemplate: TEMPLATES.ISBAR,
});

const socketModule = {
  state: initialState(),
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};

export default socketModule;
