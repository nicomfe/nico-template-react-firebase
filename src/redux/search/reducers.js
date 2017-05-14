import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import lodashForIn from 'lodash.forin'

import * as actions from './actions'

const initialState = Immutable.fromJS({
  patient: {},
})

const searchPatient = {
  [actions.SEARCH_PATIENT]: (state, action) => {
    let newState = state
    lodashForIn(action.payload.value, (value, key) => {
      newState = newState.setIn(['patient', key], value)
    })
    return newState
  },
}

export default createReducer(initialState, {
  ...searchPatient,
})
