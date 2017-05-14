import React from 'react'
import { TextField } from 'redux-form-material-ui'
import InputElement from 'react-input-mask'

export const renderMaskedInput = (field) => {
  const { input, floatingLabelText, meta: { error, touched }, ...rest } = field
  return (<TextField {...rest} {...input} floatingLabelText={floatingLabelText} errorText={touched && error ? error : ''}>
    <InputElement alwaysShowMask={false} {...input} {...rest} />
  </TextField>)
}

export const renderTextField = (field) => {
  const { input, label, meta: { error, touched }, ...rest } = field
  return (<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error ? error : ''}
    {...input}
    {...rest}
  />)
}
