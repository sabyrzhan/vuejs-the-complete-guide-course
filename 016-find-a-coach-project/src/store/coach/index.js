import router from "@/router/index.js";
import mutations from "@/store/coach/mutations.js";
import actions from "@/store/coach/actions.js";
import getters from "@/store/coach/getters.js";

export default {
    namespaced: true,
    state() {
        return {
            dataLoaded: false,
            tags: [],
            coaches: [],
            filter: []
        }
    },
    mutations,
    actions,
    getters
}