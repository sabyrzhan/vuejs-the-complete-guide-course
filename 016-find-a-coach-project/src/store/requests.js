export default {
    namespaced: true,
    state() {
        return {
            dataLoaded: false,
            requests: []
        }
    },
    mutations: {
        async storeContact(state, payload) {
            try {
                await fetch(import.meta.env.VITE_REST_API_BASE_URL + '/requests.json', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })

                this.commit('requests/loadData')
                return true
            } catch(e) {
                console.log('Error sending data', e)
                return false
            }
        },
        async loadData(state) {
            state.dataLoaded = false;
            try {
                const response = await fetch(import.meta.env.VITE_REST_API_BASE_URL + "/requests.json")
                if (response.ok) {
                    let requests = await response.json()
                    if (requests != null) {
                        requests = Object.values(requests);
                        state.requests = requests
                    } else {
                        state.requests = []
                    }
                } else {
                    console.log('Error response from server: ', response.status)
                    state.requests = []
                }
                state.dataLoaded = true
            } catch(e) {
                console.log('Error loading data', e)
                state.dataLoaded = false;
            }
        }
    },
    actions: {
        sendRequest(ctx, payload) {
            ctx.commit('storeContact', payload)
        }
    }
}