export default {
  async authRequest(ctx, payload) {
    const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;
    let url = '';
    if (payload.mode === 'login') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }),
    })
    const responseData = await response.json()
    if (!response.ok) {
      throw new Error(responseData.error.message || 'Failed to authenticate')
    }
    ctx.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  async login(ctx, payload) {
    payload.mode = 'login';
    return ctx.dispatch('authRequest', payload);
  },

  async signup(ctx, payload) {
    payload.mode = 'signup';
    return ctx.dispatch('authRequest', payload);
  }
}