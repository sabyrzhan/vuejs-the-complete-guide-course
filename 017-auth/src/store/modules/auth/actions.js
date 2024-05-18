import router from '@/router';
let timer = null;

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
      userId: responseData.localId
    })
    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    const expireDate = new Date().getTime() + (+responseData.expiresIn * 1000)
    localStorage.setItem('expireDate', expireDate);
    ctx.dispatch('initTimer')
  },
  initTimer(ctx) {
    const expiresIn = +localStorage.getItem('expireDate') - new Date().getTime()
    timer = setTimeout(() => {
      ctx.dispatch('logout')
      router.replace('/coaches')
    }, expiresIn)
  },
  async login(ctx, payload) {
    payload.mode = 'login';
    return ctx.dispatch('authRequest', payload);
  },
  tryLogin(ctx) {
    const isExpired = +localStorage.getItem('expireDate') - new Date().getTime()
    if (isExpired < 0) {
      return
    }

    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if (token != null && userId != null) {
      ctx.commit('setUser', {
        userId: userId,
        token: token,
      });
    }
    ctx.dispatch('initTimer')
  },
  async signup(ctx, payload) {
    payload.mode = 'signup';
    return ctx.dispatch('authRequest', payload);
  },
  logout(ctx) {
    ctx.commit('setUser', {
      token: null,
      userId: null
    })
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expireDate')
    clearTimeout(timer);
  }
}