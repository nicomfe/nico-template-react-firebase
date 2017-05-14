import React from 'react'
import { connect } from 'react-redux'
import { getFormValues, isValid } from 'redux-form/immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { signIn } from '../../redux/auth/actions'
import { isLoginDisabled } from '../../redux/auth/selectors'
import LoginForm from '../../components/login/LoginForm'
import PlainLink from '../routing/PlainLink'

class LoginContainer extends React.Component {

  handleLogin = () => {
    const { dispatchSigIn, loginFormValues } = this.props
    dispatchSigIn(loginFormValues.toJS())
  }

  render() {
    const { loginDisabled, isLoginFormValid } = this.props
    return (<div>
      <LoginForm handleSubmit={this.handleLogin} loginDisabled={loginDisabled} isValid={isLoginFormValid} />
      <div style={{ textAlign: 'center' }}>Dont have an account? <PlainLink path="/"><span>Click here</span></PlainLink></div>
    </div>)
  }
}

LoginContainer.propTypes = {
  dispatchSigIn: React.PropTypes.func.isRequired,
  loginFormValues: ImmutablePropTypes.map,
  loginDisabled: React.PropTypes.bool,
  isLoginFormValid: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  loginFormValues: getFormValues('loginForm')(state),
  isLoginFormValid: isValid('loginForm')(state),
  loginDisabled: isLoginDisabled(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchSigIn: (user) => { dispatch(signIn(user)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
