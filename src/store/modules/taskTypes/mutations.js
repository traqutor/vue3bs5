import { Mutations } from "@/store/enums/EnumTypes";

export default {
  [Mutations.setTaskTypes]: (state, types) => {
    state.taskTypes = types;
  },
};
