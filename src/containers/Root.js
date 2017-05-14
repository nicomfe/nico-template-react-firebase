import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { routes } from '../routes'
import theme from '../base/materialUiTheme'

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <MuiThemeProvider muiTheme={theme}>
        <Router history={props.history} routes={routes} />
      </MuiThemeProvider>
    </Provider>
  )
}

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
}

export default Root
