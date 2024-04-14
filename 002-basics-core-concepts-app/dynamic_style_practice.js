Vue.createApp({
    data() {
        return {
            style1: '',
            style2: '',
            shown: true,
        }
    },
    computed: {
        style1Computed() {
            if (this.style1 === '') {
                return 'box1';
            }

            return this.style1;
        },
        backgroundColor() {
            return {backgroundColor: this.style2};
        }
    },
    methods: {
        toggle() {
            this.shown = !this.shown;
        }
    }
}).mount('body');