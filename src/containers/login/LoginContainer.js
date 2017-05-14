import React from 'react'
import { connect } from 'react-redux'
import { getFormValues, isValid } from 'redux-form/immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { signIn } from '../../redux/auth/actions'
import { isLoginDisabled } from '../../redux/auth/selectors'
import LoginForm from '../../components/login/LoginForm'

class LoginContainer extends React.Component {

  handleLogin = () => {
    const { dispatchSigIn, loginFormValues } = this.props
    dispatchSigIn(loginFormValues.toJS())
  }

  render() {
    const { loginDisabled, isLoginFormValid } = this.props
    return <LoginForm handleSubmit={this.handleLogin} loginDisabled={loginDisabled} isValid={isLoginFormValid} />
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
