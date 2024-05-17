export default {
    addFilter(state, filter) {
        state.filter.push(filter)
    },
    removeFilter(state, filter) {
        state.filter = state.filter.filter(v => v !== filter)
    },
    initLoadData(state) {
        state.filter = []
        state.dataLoaded = false
    },
    setLoadedData(state, tagsAndCoaches) {
        state.tags = tagsAndCoaches[0]
        state.coaches = tagsAndCoaches[1]
        state.dataLoaded = true
    }
}