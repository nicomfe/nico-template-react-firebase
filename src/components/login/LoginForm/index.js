import React from 'react'
import { reduxForm, Field } from 'redux-form/immutable'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import Immutable from 'immutable'

import styles from './styles.scss'
import { isEmpty } from '../../../utils/validation'

export class LoginFormComponent extends React.Component {

  handleLogin = (event) => {
    if (event) event.preventDefault()
    const { handleSubmit, isValid } = this.props
    if (isValid) {
      handleSubmit()
    }
  }

  render() {
    const { loginDisabled } = this.props
    return (<form className={styles.form}>
      <Field
        component={TextField}
        maxLength={100}
        name="email"
        floatingLabelText="Email"
        tabIndex={0}
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
      <RaisedButton primary type="submit" onClick={this.handleLogin} label="Login" disabled={loginDisabled} />
    </form>)
  }
}

LoginFormComponent.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  loginDisabled: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
}

function validate(values = Immutable.Map()) {
  const errors = {}
  const requiredFields = ['email', 'password']
  requiredFields.forEach((fieldName) => {
    if (isEmpty(values.get(fieldName))) {
      errors[fieldName] = 'Requerido'
    }
  })
  return errors
}

export default reduxForm({
  form: 'loginForm',
  validate,
  enableReinitialize: true,
})(LoginFormComponent)
