import React from 'react'

import styles from './styles.scss'

const SectionHeader = (props) => {
  const { children } = props
  return (
    <div className={styles.text}>{children}</div>
  )
}

SectionHeader.propTypes = {
  children: React.PropTypes.string,
}

export default SectionHeader
