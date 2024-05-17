export default {
    async sendRequest(ctx, payload) {
        try {
            await fetch(import.meta.env.VITE_REST_API_BASE_URL + '/requests.json', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            ctx.dispatch('loadData')
        } catch(e) {
            console.log('Error sending data', e)
        }
    },
    async loadData(ctx) {
        ctx.commit('initLoadData')
        let requests = []
        try {
            const response = await fetch(import.meta.env.VITE_REST_API_BASE_URL + "/requests.json")
            if (response.ok) {
                let json = await response.json()
                if (json != null) {
                    requests = Object.values(json);
                } else {
                    requests = []
                }
            } else {
                console.log('Error response from server: ', response.status)
                requests = []
            }
        } catch(e) {
            console.log('Error loading data', e)
            requests = []
        }
        ctx.commit('setLoadedData', requests)
    }
}