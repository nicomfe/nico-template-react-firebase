import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger'
import Immutable from 'immutable'

import rootReducer from '../redux/rootReducers'
import fetchMiddleware from '../redux/utils/middleware'

const routerMiddleware = syncHistory(browserHistory)

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    compose(
      applyMiddleware(
        thunk,
        fetchMiddleware,
        routerMiddleware,
        createLogger({
          stateTransformer: (state) => {
            return state.toJS()
          },
          collapsed: () => {
            return true
          },
        }),
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../redux/rootReducers', () => {
      const nextRootReducer = require('../redux/rootReducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  routerMiddleware.listenForReplays(store, (state) => {
    return state.getIn(['routing', 'location']).toJS()
  })

  return store
}

export default configureStore
