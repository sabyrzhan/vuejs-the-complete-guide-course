import router from "@/router/index.js";

export default {
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