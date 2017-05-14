import React from 'react'

import styles from './ButtonsBar.scss'

const ButtonsBar = (props) => {
  const { children } = props
  return (
    <div className={styles.buttonsBar}>
      {children}
    </div>
  )
}

ButtonsBar.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
}

export default ButtonsBar
