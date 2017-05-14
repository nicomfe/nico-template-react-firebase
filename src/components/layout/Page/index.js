import React from 'react'

import styles from './Page.scss'

const Page = (props) => {
  const { children } = props
  return (
    <div className={styles.page}>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: React.PropTypes.array,
}

export default Page
