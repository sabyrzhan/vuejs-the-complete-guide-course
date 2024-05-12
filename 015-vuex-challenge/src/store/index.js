import products from '@/store/modules/products';
import cart from '@/store/modules/cart';
import auth from '@/store/modules/auth';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    products: products,
    cart: cart,
    auth: auth
  }
});

export default store;