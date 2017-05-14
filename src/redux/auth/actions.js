import * as authApi from '../../api/auth'
// import { setUpFirebaseListeners } from '../utils/listeners'

export const LOGIN_REQUEST = '@@login/REQUEST'
export const LOGIN_SUCCESS = '@@login/SUCCESS'
export const LOGIN_FAILURE = '@@login/FAILURE'
export const LOGIN = [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]

export const LOGOUT_REQUEST = '@@logout/REQUEST'
export const LOGOUT_SUCCESS = '@@logout/SUCCESS'
export const LOGOUT_FAILURE = '@@logout/FAILURE'
export const LOGOUT = [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE]

export const USER_INITIALIZED = '@@login/USER_INITIALIZED'

export const signIn = user => ({
  types: LOGIN,
  payload: { user },
  meta: {
    fetch: authApi.signIn.bind(null, { ...user }),
    showProgress: true,
    pushUrl: '/dashboard',
    toast: {
      success: {
        title: 'Login',
        content: 'Login exitoso',
      },
    },
  },
})

export const signOut = () => ({
  types: LOGOUT,
  meta: {
    fetch: authApi.signOut,
    showProgress: true,
    pushUrl: '/',
  },
})

const loginSuccesful = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    data: { ...user },
  },
})

export const authInitialized = (loggedInUser) => {
  return (dispatch) => {
    if (loggedInUser) {
      dispatch(loginSuccesful(loggedInUser))
      // setUpFirebaseListeners(dispatch, loggedInUser)
    } else {
      dispatch(signOut())
    }
  }
}
