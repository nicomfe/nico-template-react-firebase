import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import { SHOW_PROGRESS, HIDE_PROGRESS } from './actions'

const initialState = Immutable.fromJS({
  showProgress: false,
})

export default createReducer(initialState, {
  [SHOW_PROGRESS]: (state) => {
    return state.set('showProgress', true)
  },
  [HIDE_PROGRESS]: (state) => {
    return state.set('showProgress', false)
  },
})
