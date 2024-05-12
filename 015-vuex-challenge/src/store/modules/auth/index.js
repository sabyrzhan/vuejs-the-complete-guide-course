export default {
  namespaced: true,
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
    },
  }
}