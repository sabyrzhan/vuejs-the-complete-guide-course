export default {
  counter(state, getters) {
    if (state.counter === 0) {
      return getters.defaultIncrementer
    } else {
      return state.counter
    }
  },
  defaultIncrementer() {
    return 10
  }
}