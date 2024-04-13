Vue.createApp({
    data() {
        return {
            output1: 'Output 1',
            output2: 'Output 2'
        }
    },
    methods: {
        showAlert() {
            alert('Hello world!');
        },
        onKeyDown(event) {
            this.output1 = event.target.value;
        },
        onKeyEnter(event) {
            this.output2 = event.target.value;
        }

    }
}).mount('body');