Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                console.log("Setting timeout");
                that.result = 0;
            }, 5000);
        }
    },
    computed: {
        myResult() {
            if (this.result < 37) {
                return "Not there yet!";
            } else if (this.result > 37) {
                return "Too much!";
            }

            return this.result;
        }
    },
    methods: {
        add(value) {
            this.result += value
        }

    }
}).mount('#body');