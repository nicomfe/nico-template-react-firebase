import React from 'react'

// containers
import PlainLink from '../routing/PlainLink'
import SignupContainer from '../login/SignupContainer'

const IndexContainer = () => {
  return (
    <div>
      <SignupContainer />
      <div style={{ textAlign: 'center' }}>Already signed up? <PlainLink path="/login"><span>Click here</span></PlainLink></div>
    </div>
  )
}

IndexContainer.propTypes = {}

export default IndexContainer
