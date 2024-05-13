import {createStore} from "vuex";
import coach from "@/store/coach.js";

const store = createStore({
    modules: {
        coach: coach
    }
})

export default store