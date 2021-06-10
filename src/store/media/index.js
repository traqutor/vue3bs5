import mediaMutations from "./mutations";
import mediaGetters from "./getters";
import mediaActions from "./actions";

const mediaModule = {
    state() {
        return {}
    },
    mutations: mediaMutations,
    getters: mediaGetters,
    actions: mediaActions,
}

export default mediaModule;
