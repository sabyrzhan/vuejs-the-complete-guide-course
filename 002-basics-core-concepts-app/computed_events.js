Vue.createApp({
    data() {
        return {
            data1: '',
            data2: '',
        }
    },
    computed: {
        myData1() {
            console.log('MyData1 again...')
            if (this.data1 === '') {
                return 'Specify data'
            }

            return this.data1
        },
        myData2() {
            console.log('MyData2 again...')
            return this.data2;
        }
    },
    methods: {


    }
}).mount('body');