import React from 'react'

import styles from './iconsBar.scss'

const ButtonIconsBar = (props) => {
  const { label, children } = props
  return (<div className={styles.bar}>
    {label ? <span>{label}</span> : null}
    {children}
  </div>)
}

ButtonIconsBar.propTypes = {
  children: React.PropTypes.node,
  label: React.PropTypes.string,
}

export default ButtonIconsBar
