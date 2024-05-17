export default {
    addFilter(ctx, filter) {
        ctx.commit('addFilter', filter)
    },
    removeFilter(ctx, filter) {
        ctx.commit('removeFilter', filter)
    },
    async loadData(ctx) {
        ctx.commit('initLoadData')
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
        let tags = []
        let coaches = []
        try {
            const data = await Promise.all([loadItems('/tags.json'), loadItems('/coaches.json')])
            tags = data[0]
            coaches = data[1]
        } catch(e) {
            console.log('Error loading data', e)
            tags = []
            coaches = []
        }

        ctx.commit('setLoadedData', [tags, coaches])
    }
}