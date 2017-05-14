import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './store/configureStore'
import Root from './containers/Root'
import './static/favicon.png'
import './base/app.scss'
import FirebaseApi from './api/firebase'
import { authInitialized } from './redux/auth/actions'

injectTapEventPlugin()

const store = configureStore({}, browserHistory)

// this is for removing aws redirection prefix '#!'
browserHistory.listen((location) => {
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1]
  if (path) { browserHistory.replace(path) }
})

const renderApp = (App) => {
  render(
    <AppContainer>
      <App history={browserHistory} store={store} />
    </AppContainer>
    ,
    document.getElementById('app')
  )
}

FirebaseApi.initAuth().then((user) => {
  store.dispatch(authInitialized(user))
  renderApp(Root)

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const UpdatedRoot = require('./containers/Root')
      renderApp(UpdatedRoot)
    })
  }
})
.catch((error) => {
  console.error('error while initializing Firebase Auth') // eslint-disable-line no-console
  console.error(error) // eslint-disable-line no-console
})
