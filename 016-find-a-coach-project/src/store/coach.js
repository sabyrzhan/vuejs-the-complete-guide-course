export default {
    namespaced: true,
    state() {
        return {
            tags: ['frontend', 'backend', 'career'],
            coaches: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    price: '$39/hour',
                    tags: ['frontend', 'career']
                },
                {
                    id: 2,
                    name: 'Max Schwarz',
                    price: '$39/hour',
                    tags: ['frontend','backend','career']
                }
            ],
            filter: []
        }
    },
    mutations: {
        addFilter(state, filter) {
            state.filter.push(filter)
        },
        resetFilter(state) {
            state.filter = []
        }
    },
    actions: {
        addFilter(ctx, filter) {
            ctx.commit('addFilter', filter)
        },
        resetFilter(ctx) {
            ctx.commit('resetFilter')
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