import React from 'react'
import Divider from 'material-ui/Divider'

import styles from './styles.scss'

const ContentRow = props => (
  <div>
    <Divider className={styles.divider} />
    <div className={styles.cardRow}>{props.children}</div>
  </div>
)

ContentRow.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]),
}
export default ContentRow
