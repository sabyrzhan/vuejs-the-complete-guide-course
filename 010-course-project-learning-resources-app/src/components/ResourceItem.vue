<script>
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  components: {BaseCard}
}
</script>

<template>
  <base-card>
    <h2><slot name="name"></slot></h2>
    <p>
      <slot name="description"></slot>
    </p>
    <slot name="link"></slot>
  </base-card>
</template>