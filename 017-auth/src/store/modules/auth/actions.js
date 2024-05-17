export default {
  login() {

  },
  async signup(ctx, payload) {
    const apiKey = process.env.VUE_APP_FIREBASE_API_KEY;
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }),
    })

    const responseData = await response.json()
    if (!response.ok) {
      console.log(responseData);
      throw new Error(responseData.message || 'Failed to authenticate')
    }

    console.log(responseData)

    ctx.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  }
}