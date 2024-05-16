import router from "@/router/index.js";

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
    },
    actions: {
        addFilter(ctx, filter) {
            ctx.commit('addFilter', filter)
        },
        removeFilter(ctx, filter) {
            ctx.commit('removeFilter', filter)
        }
    },
    getters: {
        selectedCoach(state) {
            const coachId = parseInt(router.currentRoute.value.params.coachId)
            return state.coaches.find(c => c.id === coachId)
        },
        filteredCoaches(state) {
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