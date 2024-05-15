export default {
    namespaced: true,
    state() {
        return {
            dataLoaded: false,
            tags: [],
            coaches: [],
            filter: []
        }
    },
    mutations: {
        addFilter(state, filter) {
            state.filter.push(filter)
        },
        removeFilter(state, filter) {
            state.filter = state.filter.filter(v => v !== filter)
        },
        async loadData(state) {
            state.filter = []
            state.dataLoaded = false;
            try {
                let response = await fetch(import.meta.env.VITE_REST_API_BASE_URL + "/tags.json")
                let tags = Object.values(await response.json())
                if (tags.length !== 0) {
                    tags = tags[0]
                }
                state.tags = tags

                response = await fetch(import.meta.env.VITE_REST_API_BASE_URL + "/coaches.json")
                let coaches = Object.values(await response.json())
                if (coaches.length !== 0) {
                    coaches = coaches[0]
                }
                state.coaches = coaches;
                state.dataLoaded = true
            } catch(e) {
                console.log('Error loading data', e)
                state.dataLoaded = false;
            }
        }
    },
    actions: {
        addFilter(ctx, filter) {
            ctx.commit('addFilter', filter)
        },
        removeFilter(ctx, filter) {
            ctx.commit('removeFilter', filter)
        },
        resetFilter(ctx) {
            ctx.commit('loadData')
        },
        loadData(ctx) {
            ctx.commit('loadData')
        }
    },
    getters: {
        getCoaches(state) {
            if (state.filter.length === 0) {
                return state.coaches;
            } else {
                return state.coaches.filter(coach => {
                    const tags = coach.tags
                    for (const filter of state.filter) {
                        if (!tags.find(v => v === filter)) {
                            return false;
                        }
                    }

                    return true
                })
            }
        }
    }
}