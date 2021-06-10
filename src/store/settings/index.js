import settingsMutations from "./mutations";
import settingsGetters from "./getters";
import settingsActions from "./actions";

const settingsModule = {
    state() {
        return {}
    },
    mutations: settingsMutations,
    getters: settingsGetters,
    actions: settingsActions,
}

export default settingsModule;
