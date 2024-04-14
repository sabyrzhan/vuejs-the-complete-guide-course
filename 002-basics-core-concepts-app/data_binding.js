const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the VueJS course',
            courseGoalStyled: '<strong>Finish the course!</strong>',
            vueLink: 'https://vuejs.org',
            target: '_blank',
            placeholderValue: 'Enter your name here...'
        }
    },
    methods: {
        getCourseGoal() {
            return this.courseGoal;
        },
        getCourseGoalStyled() {
            return this.courseGoalStyled;
        }
    }
});
app.mount('#user-goal')