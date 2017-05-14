import React from 'react'
import AppBar from 'material-ui/AppBar'
import ImmutablePropTypes from 'react-immutable-proptypes'

import LoginMenu from './LoginMenu'
import LoggedMenu from './LoggedMenu'
import Logo from '../images/logo'

class Nav extends React.Component {

  render() {
    const { currentUser, ...rest } = this.props
    return (
      <AppBar
        iconElementLeft={<Logo />}
        iconElementRight={currentUser && currentUser.count() > 0 ? <LoggedMenu {...rest} /> : <LoginMenu />}
      />
    )
  }
}

Nav.propTypes = {
  currentUser: ImmutablePropTypes.map,
}

export default Nav
