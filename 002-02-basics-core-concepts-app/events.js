const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        },
        handleInput(e, lastName) {
            this.name = e.target.value + ' ' + lastName;
        },
        handleSignUp() {
            alert('Signed up!');
        }
    }
});
app.mount('#body')