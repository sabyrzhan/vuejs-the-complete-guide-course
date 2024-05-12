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
  },
  getters: {
    counter(state, getters) {
      if (state.counter === 0) {
        return getters.defaultIncrementer
      } else {
        return state.counter
      }
    },
    defaultIncrementer() {
      return 10
    }
  }
})

const app = createApp(App);
app.use(store)
app.mount('#app');
