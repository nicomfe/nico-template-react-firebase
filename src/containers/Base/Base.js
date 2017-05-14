import React from 'react'
import { connect } from 'react-redux'

import { getShowProgress } from '../../redux/progress/selectors'
import { signOut } from '../../redux/auth/actions'
import NavContainer from '../menu/NavContainer'
import LoadingProgress from '../../components/loading/LoadingProgress'
import { Page } from '../../components/layout'
import NotificationBar from '../notifications/NotificationBar'

const BaseContainer = (props) => {
  const { children, showProgress } = props
  return (<Page>
    <NavContainer />
    <LoadingProgress show={showProgress} />
    {children}
    <NotificationBar />
  </Page>)
}

BaseContainer.propTypes = {
  children: React.PropTypes.element.isRequired,
  showProgress: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  showProgress: getShowProgress(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchSignOut: () => { dispatch(signOut()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer)
