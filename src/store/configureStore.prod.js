import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Immutable from 'immutable'

import rootReducer from '../redux/rootReducers'
import fetchMiddleware from '../redux/utils/middleware'

const reduxRouterMiddleware = syncHistory(browserHistory)

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    compose(
      applyMiddleware(
        reduxRouterMiddleware,
        thunk,
        fetchMiddleware,
      ),
    )
  )

  return store
}

export default configureStore
