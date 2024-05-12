import mutations from '@/store/modules/auth/mutations';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: mutations
}