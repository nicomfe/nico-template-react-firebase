import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Base from './containers/Base/Base'
import Index from './containers/Index/Index'
import Dashboard from './containers/Dashboard'
import LoginContainer from './containers/login/LoginContainer'

export const urls = {
  index: '/',
  dashboard: '/dashboard',
}

const redirectIfLoggedIn = (nextState, replace) => {
  if (localStorage.getItem('sessionUser')) {
    replace('/dashboard')
  }
}
const requireLogin = (nextState, replace) => {
  if (!localStorage.getItem('sessionUser')) {
    replace('/')
  }
}

export const routes = (
  <Route path={urls.index} component={Base}>
    <IndexRoute component={Index} onEnter={redirectIfLoggedIn} />
    <Route path="/login" component={LoginContainer} />
    <Route onEnter={requireLogin}>
      <Route path={urls.dashboard} component={Dashboard} />
    </Route>
  </Route>
)

export default routes
