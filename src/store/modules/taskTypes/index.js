import Mutations from "./typesMutations";
import Actions from "./typesActions";
import Getters from "./typeGetters";
import { TASK_TYPES_VIEW_MODES } from "@/store/enums/EnumTypes";

const taskTypesModule = {
  state() {
    return {
      taskTypes: [],
      customFields: [],
      requiredActions: [],
      selectedTaskType: null,
      isTypesLoading: false,
      isTypePost: false,
      viewMode: TASK_TYPES_VIEW_MODES.LIST,
    };
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
export default taskTypesModule;
