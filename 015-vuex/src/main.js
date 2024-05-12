import { createApp } from 'vue';
import { createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state, value1) {
      state.counter += value1;
    }
  }
})

const app = createApp(App);
app.use(store)
app.mount('#app');
