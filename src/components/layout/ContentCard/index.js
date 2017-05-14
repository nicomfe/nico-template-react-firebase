import React from 'react'

import styles from './ContentCard.scss'

const ContentCard = (props) => {
  const { children, className } = props
  return (
    <div className={`${styles.contentCard} ${className || ''}`}>
      {children}
    </div>
  )
}

ContentCard.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.element,
}

export default ContentCard
