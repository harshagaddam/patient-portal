import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import AuthStyles from './AuthStyles'

export const RegisterForm = (props) => {

  const {
    handleTextChange,
    passwordConfirmationErrorMsg,
    textProps
  } = props

  return (
    <View style={AuthStyles.formWrap}>
      <FormLabel labelStyle={AuthStyles.labelText}>Email</FormLabel>
      <FormInput
        autoCapitalize='none'
        keyboardType='email-address'
        value={textProps.email}
        onChangeText={value => handleTextChange('email', value)}
        inputStyle={AuthStyles.inputText} />

      {textProps.emailError &&
        <FormValidationMessage labelStyle={AuthStyles.errorText}>
          Email must not be blank
        </FormValidationMessage>}

      <FormLabel labelStyle={AuthStyles.labelText}>Password</FormLabel>
      <FormInput
        autoCapitalize='none'
        secureTextEntry
        value={textProps.password}
        onChangeText={value => handleTextChange('password', value)}
        inputStyle={AuthStyles.inputText} />

      {textProps.passwordError &&
        <FormValidationMessage labelStyle={AuthStyles.errorText}>
          Password must not be blank
        </FormValidationMessage>}

      <FormLabel labelStyle={AuthStyles.labelText}>Confirm Password</FormLabel>
      <FormInput
        autoCapitalize='none'
        secureTextEntry
        value={textProps.passwordConfirmation}
        onChangeText={value => handleTextChange('passwordConfirmation', value)}
        inputStyle={AuthStyles.inputText} />

      {textProps.passwordConfirmationError &&
        <FormValidationMessage labelStyle={AuthStyles.errorText}>
          {passwordConfirmationErrorMsg}
        </FormValidationMessage>}
    </View>
  )
}


RegisterForm.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  passwordConfirmationErrorMsg: PropTypes.string.isRequired,
  textProps: PropTypes.shape({
    emailError: PropTypes.bool,
    passwordError: PropTypes.bool,
    passwordConfirmationError: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string
  }).isRequired
}

export default RegisterForm