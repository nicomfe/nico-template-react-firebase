import React from 'react'
import { Link } from 'react-router'

import styles from './MenuItem.scss'

const MenuItem = (props) => {
  const { to, title, description } = props
  return (
    <Link to={to} className={styles.listGroupItem}>
      <h4>{title}</h4>
      <p>{description}</p>
    </Link>
  )
}

MenuItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
}

export default MenuItem
