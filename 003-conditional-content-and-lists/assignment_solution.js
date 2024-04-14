Vue.createApp({
    data() {
        return {
            items: [],
            value: '',
            isListShown: true,
            buttonLabel: 'Hide / Show List'
        }
    },
    watch: {
    },
    methods: {
        resetDefaults() {
            this.buttonLabel = 'Hide / Show List'
            this.isListShown = true
        },
        addItem() {
            this.items.push(this.value)
            this.value = '';
        },
        removeItem(index) {
            this.items.splice(index, 1);
            if (this.items.length === 0) {
                this.resetDefaults();
            }
        },
        toggle() {
            if (this.items.length === 0) {
                this.resetDefaults();
                return;
            }

            this.isListShown = !this.isListShown;
            if (this.isListShown) {
                this.buttonLabel = 'Hide List';
            } else {
                this.buttonLabel = 'Show List'
            }
        }
    }
}).mount('#assignment')