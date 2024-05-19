<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p1">Product 1</router-link>
  </section>
</template>

<script>
import {computed, inject, ref} from 'vue';
import {useRoute} from "vue-router";

export default {
  setup() {
    const route = useRoute()
    const pid = computed(() => route.params.pid);
    const products = inject('products')
    const product = computed(() => products.value.find(p => p.id === pid.value))
    const title = computed(()=> product.value.title);
    const price = computed(() => product.value.price);
    const description = computed(() => product.value.description);

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>