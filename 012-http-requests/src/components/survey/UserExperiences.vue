<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurveys">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['watch-data'],
  components: {
    SurveyResult,
  },
  watch: {
    watchData() {
      this.loadSurveys()
    }
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadSurveys() {
      this.isLoading = true
      this.error = null
      fetch(process.env['VUE_APP_FIREBASE_URL'])
        .then(res => res.json())
        .then(data => {
          const results = []
          for (const id in data) {
            results.unshift({
              id: id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          this.results = results
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.error = 'Error fetching data. Try again later!'
        })
    }
  },
  mounted() {
    this.loadSurveys()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>