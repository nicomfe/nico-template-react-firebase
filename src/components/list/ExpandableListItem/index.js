import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import Avatar from 'material-ui/Avatar'

class ExpandableListItem extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
    }
  }

  getCardHeader = () => {
    const { title, subtitle, badges } = this.props
    return (
      <CardHeader
        style={{
          display: 'flex',
          justifyContent: 'spaceAround',
          alignItems: 'center',
        }}
        title={title}
        subtitle={subtitle}
        avatar={
          <Avatar
            icon={<AccountCircle />}
            size={30}
          />
        }
        actAsExpander
        showExpandableButton
      >
        {badges}
      </CardHeader>
    )
  }

  handleExpandChange = () => {
    const { expanded } = this.state
    this.setState({ expanded: !expanded })
  }

  render() {
    const { expanded } = this.state
    const { children } = this.props
    return (
      <Card expanded={expanded} onExpandChange={this.handleExpandChange}>
        {this.getCardHeader()}
        <CardText expandable style={{ paddingTop: 0, paddingBottom: 0 }}>
          {children}
        </CardText>
      </Card>
    )
  }
}

ExpandableListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  badges: React.PropTypes.node,
  children: React.PropTypes.element,
}

export default ExpandableListItem
