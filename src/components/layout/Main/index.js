import React from 'react'

import styles from './Main.scss'

const Main = (props) => {
  const { children, singleColumn } = props
  return (
    <div className={singleColumn ? styles.mainLayout : styles.mainLayoutColumns}>
      {children}
    </div>
  )
}

Main.propTypes = {
  children: React.PropTypes.array,
  singleColumn: React.PropTypes.bool, // when this is false the children are placed in different columns
}

export default Main
