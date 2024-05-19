export default {
    methods: {
        log(message) {
            console.log('[customlogger] ' + message)
        }
    },
    mounted() {
        this.log('Mounted')
    }
}