import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements'

import { colors, fonts } from '../../utils/styleVariables'

import AuthStyles from './AuthStyles'

export class Login extends Component {
  state = {
    emailError: false,
    passwordError: false,

    email: null,
    password: null
  }

  goToRegister = () => {
    this.props.navigation.navigate('Register')
  }

  handleTextChange = (name, value) => {
    this.setState({ [name]: value })
  }

  onSuccess = () => {
    this.props.navigation.navigate('AppNavigator')
  }

  setErrors = () => {
    if (!this.state.email) {
      this.setState({ emailError: true })
    }

    if (!this.state.password) {
      this.setState({ passwordError: true })
    }
  }

  submit = () => {
    this.setErrors()

    if (this.state.email && this.state.password) {
      // TODO: smake a fetch call to submit login info
      // TODO: render errors from fetch call on failure
      this.onSuccess()
    }
  }

  render() {
    const { emailError, passwordError } = this.state
    const emailErrorMsg = 'Email must not be blank'
    const passwordErrorMsg = 'Password must not be blank'

    return (
      <View style={AuthStyles.container}>

        <Text h1 style={AuthStyles.headerText}>Patient Portal</Text>

        <View style={AuthStyles.formWrap}>
          <FormLabel labelStyle={AuthStyles.labelText}>Email</FormLabel>
          <FormInput
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={value => this.handleTextChange('email', value)}
            inputStyle={AuthStyles.inputText}/>

          {emailError && 
            <FormValidationMessage labelStyle={AuthStyles.errorText}>
              {emailErrorMsg}
            </FormValidationMessage>}

          <FormLabel labelStyle={AuthStyles.labelText}>Password</FormLabel>
          <FormInput
            autoCapitalize='none'
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.handleTextChange('password', value)}
            inputStyle={AuthStyles.inputText} />
            
          {passwordError && 
            <FormValidationMessage labelStyle={AuthStyles.errorText}>
              {passwordErrorMsg}
            </FormValidationMessage>}
        </View>

        <Button
          title='LOGIN'
          onPress={this.submit}
          style={AuthStyles.button}
          backgroundColor={colors.primary}
        />

        <View style={{ height: 20 }} />

        <Text h5 style={AuthStyles.text}>New to Patient Portal?</Text>
        <Button
          raised
          title='REGISTER'
          onPress={this.goToRegister}
          style={AuthStyles.button}
          backgroundColor={colors.secondary}
        />
      </View>
    )
  }
}

export default Login
