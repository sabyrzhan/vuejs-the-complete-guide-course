export default {
  incrementAsync(ctx, value) {
    setTimeout(() => {
      ctx.commit('increment', value);
    }, 1000);
  }
}