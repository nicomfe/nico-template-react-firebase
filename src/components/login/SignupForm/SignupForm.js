import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import Immutable from 'immutable'

import baseStyles from '../../../base/base.scss'
import { isEmpty } from '../../../utils/validation'

class SignupForm extends React.Component {

  handleSignup = (event) => {
    if (event) event.preventDefault()
    const { handleSubmit, isValid } = this.props
    if (isValid) {
      handleSubmit()
    }
  }

  render() {
    const { loginDisabled } = this.props
    return (<form className={baseStyles.templateForm}>
      <Field
        component={TextField}
        maxLength={100}
        name="name"
        floatingLabelText="Name"
        type="text"
        className="fieldForm"
      />
      <Field
        component={TextField}
        maxLength={100}
        name="email"
        floatingLabelText="Email"
        type="text"
        className="fieldForm"
      />
      <Field
        component={TextField}
        maxLength={100}
        name="password"
        floatingLabelText="Password"
        type="password"
        className="fieldForm"
      />
      <RaisedButton primary type="submit" onClick={this.handleSignup} label="Signup" disabled={loginDisabled} />
    </form>)
  }
}

SignupForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  loginDisabled: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
}

function validate(values = Immutable.Map()) {
  const errors = {}
  const requiredFields = ['email', 'name', 'password']
  requiredFields.forEach((fieldName) => {
    if (isEmpty(values.get(fieldName))) {
      errors[fieldName] = 'Required'
    }
  })
  return errors
}

export default reduxForm({
  form: 'signupForm',
  validate,
  enableReinitialize: true,
})(SignupForm)
