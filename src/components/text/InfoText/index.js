import React from 'react'

import styles from './InfoText.scss'

const InfoText = (props) => {
  const { children } = props
  return <p className={styles.infoText}>{children}</p>
}

InfoText.propTypes = {
  children: React.PropTypes.string,
}

export default InfoText
