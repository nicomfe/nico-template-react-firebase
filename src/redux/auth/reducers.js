import { createReducer } from 'redux-immutablejs'
import Immutable from 'immutable'

import * as actions from './actions'
import { setSessionInStorage, removeSessionInStorage } from '../../helpers/localStorageHelper'

const initialState = Immutable.fromJS({
  currentUser: {},
  loginDisabled: false,
})

const loginReducer = {
  [actions.LOGIN_REQUEST]: state => state.set('currentUser', Immutable.Map()).set('loginDisabled', true),
  [actions.LOGIN_SUCCESS]: (state, action) => {
    const user = action.payload.data
    setSessionInStorage(user)
    return state.set('currentUser', Immutable.fromJS({ uid: user.uid })).set('loginDisabled', true)
  },
  [actions.LOGIN_FAILURE]: state => state.set('currentUser', Immutable.Map()).set('loginDisabled', false),
}

const logoutReducer = {
  [actions.LOGOUT_REQUEST]: state => state,
  [actions.LOGOUT_SUCCESS]: (state) => {
    removeSessionInStorage()
    return state.set('currentUser', Immutable.Map()).set('loginDisabled', false)
  },
  [actions.LOGOUT_FAILURE]: state => state.set('loginDisabled', true),
}

export default createReducer(initialState, {
  ...loginReducer,
  ...logoutReducer,
})
