import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import styles from './Link.scss'

const PlainLink = (props) => {
  const { children, ...rest } = props
  return <Link {...rest}>{React.cloneElement(children, { className: styles.link })}</Link>
}

PlainLink.propTypes = {
  children: PropTypes.element,
}

export default PlainLink
