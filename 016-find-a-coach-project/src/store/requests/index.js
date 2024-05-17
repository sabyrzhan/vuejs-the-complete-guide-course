import mutations from "@/store/requests/mutations.js";
import actions from "@/store/requests/actions.js";

export default {
    namespaced: true,
    state() {
        return {
            dataLoaded: false,
            requests: []
        }
    },
    mutations,
    actions
}