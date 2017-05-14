import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actions'

const initialState = Immutable.fromJS({
  all: [],
})

const showNotificationReducer = {
  [actions.PUSH_NOTIFICATION]: (state, action) => {
    // Adds the notification in the last position of the list
    return state.set('all', state.get('all').push(Immutable.fromJS(action.payload.data)))
  },
}

const hideNotificationReducer = {
  [actions.HIDE_NOTIFICATION]: (state) => {
    // Removes the first value in the list
    return state.set('all', state.get('all').delete(0))
  },
}

export default createReducer(initialState, {
  ...showNotificationReducer,
  ...hideNotificationReducer,
})
