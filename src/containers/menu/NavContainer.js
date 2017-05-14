import React from 'react'
import { connect } from 'react-redux'

import { getCurrentUser } from '../../redux/auth/selectors'
import { signOut } from '../../redux/auth/actions'
import Nav from '../../components/menu/Nav'

class NavContainer extends React.Component {
  render() {
    return <Nav {...this.props} />
  }
}

NavContainer.propTypes = {}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => { dispatch(signOut()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)
