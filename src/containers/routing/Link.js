import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const Link = (props) => {
  const { dispatchPush, path, children, ...rest } = props

  const handleClick = () => {
    dispatchPush(path)
  }

  return React.cloneElement(children, { onClick: handleClick, ...rest })
}

Link.propTypes = {
  dispatchPush: React.PropTypes.func.isRequired,
  path: React.PropTypes.string.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  dispatchPush: path => dispatch(push(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
