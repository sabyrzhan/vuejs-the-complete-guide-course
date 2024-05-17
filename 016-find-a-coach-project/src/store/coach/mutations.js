export default {
    addFilter(state, filter) {
        state.filter.push(filter)
    },
    removeFilter(state, filter) {
        state.filter = state.filter.filter(v => v !== filter)
    },
    async loadData(state) {
        state.filter = []
        state.dataLoaded = false;
        const loadItems = async (urlPath) => {
            let response = await fetch(import.meta.env.VITE_REST_API_BASE_URL + urlPath)
            let items = Object.values(await response.json())
            if (items.length !== 0) {
                items = items[0]
            } else {
                items = []
            }

            return items
        }
        try {
            const data = await Promise.all([loadItems('/tags.json'), loadItems('/coaches.json')])
            state.tags = data[0]
            state.coaches = data[1]
        } catch(e) {
            console.log('Error loading data', e)
            state.tags = []
            state.coaches = []
        }

        state.dataLoaded = true
    }
}