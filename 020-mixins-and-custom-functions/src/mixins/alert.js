export default {
    data() {
        return {
            alertIsVisible: false,
            alertTitle: 'Default title',
        };
    },
    methods: {
        showAlert() {
            this.log('Showing alert')
            this.alertIsVisible = true;
        },
        hideAlert() {
            this.log('Hiding alert')
            this.alertIsVisible = false;
        },
    },
};