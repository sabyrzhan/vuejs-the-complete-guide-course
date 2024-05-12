import { createApp } from 'vue';
import { createStore} from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
      counter2: 1
    }
  },
  mutations: {
    increment(state, value1) {
      state.counter += value1;
    },
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
}

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
})

const app = createApp(App);
app.use(store)
app.mount('#app');
