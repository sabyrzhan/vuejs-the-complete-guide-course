export default {
    addFilter(ctx, filter) {
        ctx.commit('addFilter', filter)
    },
    removeFilter(ctx, filter) {
        ctx.commit('removeFilter', filter)
    }
}