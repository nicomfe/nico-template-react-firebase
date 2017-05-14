import React from 'react'
import List from 'material-ui/List'

import InfoText from '../../text/InfoText'

class ExpandableList extends React.Component {
  render() {
    const { children, emptyListText } = this.props
    return (
      <List>
        {children && children.count() > 0
          ? children
          : <InfoText>{emptyListText}</InfoText>
        }
      </List>
    )
  }
}

ExpandableList.defaultProps = {
  emptyListText: 'No items',
}

ExpandableList.propTypes = {
  emptyListText: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
}

export default ExpandableList
