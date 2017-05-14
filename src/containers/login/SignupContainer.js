import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFormValues, isValid } from 'redux-form/immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { signup } from '../../redux/auth/actions'
import SignupForm from '../../components/login/SignupForm/SignupForm'

class SignupContainer extends React.Component {

  handleSignup = () => {
    const { dispatchSignup, signupFormValues } = this.props
    dispatchSignup(signupFormValues.toJS())
  }

  render() {
    const { isSignupFormValid } = this.props
    return <SignupForm handleSubmit={this.handleSignup} isValid={isSignupFormValid} />
  }
}

SignupContainer.propTypes = {
  dispatchSignup: PropTypes.func.isRequired,
  signupFormValues: ImmutablePropTypes.map,
  isSignupFormValid: React.PropTypes.bool,
}

const mapStateToProps = state => ({
  signupFormValues: getFormValues('signupForm')(state),
  isSignupFormValid: isValid('signupForm')(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchSignup: (user) => { dispatch(signup(user)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
