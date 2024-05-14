export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        storeContact(state, payload) {
            state.requests.push(payload);
        }
    },
    actions: {
        sendRequest(ctx, payload) {
            ctx.commit('storeContact', payload)
        }
    }
}