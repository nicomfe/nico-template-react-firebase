import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import CircularProgress from 'material-ui/CircularProgress'

import style from './styles'

const LoadingProgress = (props) => {
  const { show, type } = props

  const renderProgress = () => {
    return type === 'circular'
      ? <CircularProgress size={80} thickness={5} />
      : <LinearProgress style={style} mode="indeterminate" />
  }

  return show ? renderProgress() : null
}

LoadingProgress.propTypes = {
  show: React.PropTypes.bool,
  type: React.PropTypes.string,
}

export default LoadingProgress
