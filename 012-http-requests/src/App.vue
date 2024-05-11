<template>
  <learning-survey @data-sent="handleDataSent"></learning-survey>
  <user-experiences :watch-data="watchData"></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      watchData: null
    }
  },
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  methods: {
    // storeSurvey(surveyData) {
    //   const surveyResult = {
    //     name: surveyData.userName,
    //     rating: surveyData.rating,
    //     id: new Date().toISOString(),
    //   };
    //   this.savedSurveyResults.push(surveyResult);
    //   console.log(surveyResult);
    // },
    handleDataSent() {
      this.watchData = new Date().toISOString()
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>