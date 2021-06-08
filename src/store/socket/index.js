import socketMutations from "./mutations";
import actionsMutations from "./actions";
import gettersMutations from "./getters";

const socketModule = {
    state() {
        return {
            hubConnection: null,
        }
    },
    mutations: socketMutations,
    actions: actionsMutations,
    getters: gettersMutations,
}

export default socketModule;
