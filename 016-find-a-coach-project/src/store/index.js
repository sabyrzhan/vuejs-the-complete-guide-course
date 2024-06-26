import {createStore} from "vuex";
import coach from "@/store/coach/index.js";
import requests from "@/store/requests/index.js";

const store = createStore({
    modules: {
        coach: coach,
        requests: requests
    }
})

export default store