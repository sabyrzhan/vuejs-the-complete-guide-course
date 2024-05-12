import { createApp } from 'vue';
import { createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    }
  },
  mutations: {
    increment(state, value1) {
      state.counter += value1;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    incrementAsync(ctx, value) {
      setTimeout(() => {
        ctx.commit('increment', value);
      }, 1000);
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
