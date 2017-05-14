import React from 'react'

import LogoMini from './LogoMini'
import LogoLetters from './LogoLetters'

const Logo = (props) => {
  return (
    <div>
      <LogoMini {...props} />
      <LogoLetters {...props} />
    </div>
  )
}

export default Logo
