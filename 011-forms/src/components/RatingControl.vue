<template>
  <ul class="rating">
    <li>
      <button @click="setRatingValue('poor')" :class="{active: ratingValue === 'poor'}">
        Poor
      </button>
    </li>
    <li>
      <button @click="setRatingValue('average')" :class="{active: ratingValue === 'average'}">
        Average
      </button>
    </li>
    <li>
      <button @click="setRatingValue('great')" :class="{active: ratingValue === 'great'}">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ratingValue: ''
    }
  },
  methods: {
    setRatingValue(value) {
      this.ratingValue = value
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem 1rem 0;
}

button {
  cursor: pointer;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid lightgray;
}

button.active {
  border-color: #0076bb;
  color: #0076bb;
  font-weight: bolder;
}
</style>