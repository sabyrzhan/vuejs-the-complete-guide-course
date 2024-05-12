import { createStore } from 'vuex';
import mutations from '@/store/mutations';
import counter from '@/store/modules/counter';

const store = createStore({
  modules: {
    numbers: counter
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: mutations
})

export default store