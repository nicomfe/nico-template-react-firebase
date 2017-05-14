import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable'
import { UPDATE_LOCATION } from 'react-router-redux'
import Immutable from 'immutable'

import auth from './auth/reducers'
import progress from './progress/reducers'
import search from './search/reducers'
import notifications from './notifications/reducers'

const initialState = Immutable.fromJS({
  location: undefined,
})

function immutableRouting(state = initialState, action) {
  if (action.type === UPDATE_LOCATION) {
    return state.merge({
      location: action.payload,
    })
  }

  return state
}

const rootReducer = combineReducers({
  routing: immutableRouting,
  form,
  auth,
  progress,
  search,
  notifications,
})

export default rootReducer
