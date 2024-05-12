import getters from '@/store/modules/cart/getters';
import mutations from '@/store/modules/cart/mutations';

export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    }
  },
  getters: getters,
  mutations: mutations
}