import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setSelectedTemplateViewMode]: (state, view) => {
    state.templateViewMode = view;
  },
  [Mutations.setSelectedTemplate]: (state, template) => {
    state.selectedTemplate = template;
  },
};
