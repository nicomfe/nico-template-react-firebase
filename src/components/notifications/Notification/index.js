import React from 'react'
import Snackbar from 'material-ui/Snackbar'

import styles from './Notification.scss'

const Notification = (props) => {
  const { open, message = '', handleRequestClose, type } = props
  return (<Snackbar
    open={open}
    message={message}
    autoHideDuration={3000}
    onRequestClose={handleRequestClose}
    className={type === 'error' ? styles.error : styles.info}
  />)
}

Notification.propTypes = {
  message: React.PropTypes.string.isRequired,
  open: React.PropTypes.bool,
  handleRequestClose: React.PropTypes.func.isRequired,
  type: React.PropTypes.string,
}

export default Notification
