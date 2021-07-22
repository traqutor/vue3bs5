export default {
  getQuickMessages: (state) => {
    return state.quickMessages;
  },
  getTemplates: (state) => {
    return state.templates;
  },
  getTemplateViewMode: (state) => {
    return state.templateViewMode;
  },
  getSelectedTemplate: (state) => {
    return state.selectedTemplate;
  },
};
