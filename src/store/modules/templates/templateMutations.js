import { Mutations } from "@/store/enums/EnumTypes";
import { initialState } from "@/store/modules/templates";

export default {
  [Mutations.cleanTemplatesState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setSelectedTemplateViewMode]: (state, view) => {
    state.templateViewMode = view;
  },

  [Mutations.setSelectedTemplate]: (state, template) => {
    state.selectedTemplate = template;
  },
};
