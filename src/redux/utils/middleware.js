/**
 * Middlewares
 * Please read http://redux.js.org/docs/advanced/Middleware.html for more details
 *
 **/
import { push } from 'react-router-redux'

import { showProgress, hideProgress } from '../progress/actions'
import { pushNotification } from '../notifications/actions'

// This middleware handles all the fetch requests
// Dispatching a request action and then either a success or failure action
const fetch = store => next => (action) => {
  if (!action.meta || !action.meta.fetch) {
    return next(action)
  }

  if (action.meta.shouldFetch) {
    const alreadyFetchedValue = action.meta.shouldFetch(store.getState())
    if (alreadyFetchedValue) {
      return alreadyFetchedValue
    }
  }

  if (Array.isArray(action.types) === false && action.types.length === 3) {
    throw new Error('action.types must be an array of 3 action types')
  }

  const [REQUEST, SUCCESS, FAILURE] = action.types
  const { payload = {} } = action

  // dispatch request action
  next({ type: REQUEST, payload })
  dispatchProgressAction(action, true, store)
  return action.meta.fetch().then((value) => {
    // dispatch success
    if (action.meta.toast && action.meta.toast.success) {
      const { content } = action.meta.toast.success
      store.dispatch(pushNotification(content, 'info'))
    }
    dispatchProgressAction(action, false, store)
    next({ type: SUCCESS, payload: { data: value, ...payload } })
    if (action.meta.pushUrl) {
      store.dispatch(push(action.meta.pushUrl))
    }
    return value
  }, (error) => {
    // logoutIfNeeded(error.response, store)
    // dispatch failure
    next({ type: FAILURE, error, payload })
    dispatchProgressAction(action, false, store)
    store.dispatch(pushNotification(error.message, 'error'))
  })
}

function dispatchProgressAction(action, show, store) {
  if (action.meta.showProgress) {
    if (show) {
      store.dispatch(showProgress())
    } else {
      store.dispatch(hideProgress())
    }
  }
}

export default fetch
