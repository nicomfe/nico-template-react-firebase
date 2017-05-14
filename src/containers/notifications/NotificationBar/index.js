import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Notification from '../../../components/notifications/Notification'
import * as notificationsSelectors from '../../../redux/notifications/selectors'
import { hideNotification } from '../../../redux/notifications/actions'

class NotificationBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  componentWillMount() {
    const { notification } = this.props
    this.handleShowNotification(notification)
  }

  componentWillReceiveProps(nextProps) {
    const { notification } = this.props
    const nextNotification = nextProps.notification
    if (nextNotification && !nextNotification.equals(notification)) {
      this.handleShowNotification(nextNotification)
    }
  }

  handleShowNotification(notification) {
    if (notification && notification.has('message')) {
      this.setState({
        message: notification.get('message'),
        type: notification.get('type'),
        open: true,
      })
    }
  }

  handleRequestClose = () => {
    const { dispatchHideNotification } = this.props
    dispatchHideNotification()
    this.setState({ open: false })
  }

  render() {
    const { open, message = '', type = 'info' } = this.state
    return <Notification open={open} type={type} message={message} handleRequestClose={this.handleRequestClose} />
  }
}

NotificationBar.propTypes = {
  notification: ImmutablePropTypes.map,
  dispatchHideNotification: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  notification: notificationsSelectors.getNextNotification(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchHideNotification: () => { dispatch(hideNotification()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar)
