export default {
    initLoadData(state) {
        state.dataLoaded = false;
    },
    setLoadedData(state, requests) {
        state.requests = requests
        state.dataLoaded = true
    }
}