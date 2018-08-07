import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

import { colors } from '../../utils/styleVariables'

import AuthStyles from './AuthStyles'
import RegisterForm from './RegisterForm'

export class Register extends Component {
  state = {
    emailError: false,
    passwordError: false,
    passwordConfirmationError: false,

    email: null,
    password: null,
    passwordConfirmation: null
  }

  passwordConfirmationErrorMsg = () => {
    const { password, passwordConfirmation } = this.state

    if (!passwordConfirmation) {
      return 'Please type your password again to confirm'

    } else if (passwordConfirmation !== password) {
      return 'Password and password confirmation do not match'

    } else return null
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleTextChange = (name, value) => {
    this.setState({ [name]: value })
  }

  onSuccess = () => {
    this.props.navigation.navigate('AppNavigator')
  }

  setErrors = () => {
    const { email, password, passwordConfirmation } = this.state
    const passwordsMatch = password === passwordConfirmation

    if (!email) {
      this.setState({ emailError: true })
    }

    if (!password) {
      this.setState({ passwordError: true })
    }

    if (!passwordConfirmation || !passwordsMatch) {
      this.setState({ passwordConfirmationError: true })
    }
  }

  submit = () => {
    const { email, password, passwordConfirmation } = this.state
    const passwordsMatch = password === passwordConfirmation

    this.setErrors()

    if (email && password && passwordConfirmation && passwordsMatch) {
      // TODO: make a fetch call to submit login info
      // TODO: render errors from fetch call on failure
      this.onSuccess()
    }
  }

  render() {
    return (
      <View style={AuthStyles.container}>

        <Text h1 style={AuthStyles.headerText}>Patient Portal</Text>

        <RegisterForm
          handleTextChange={this.handleTextChange}
          textProps={this.state}
          passwordConfirmationErrorMsg={this.passwordConfirmationErrorMsg()}
        />
  
        <Button raised
          title='REGISTER'
          onPress={this.submit}
          style={AuthStyles.button}
          backgroundColor={colors.primary}
        />

        <Text h5
          onPress={this.goToLogin}
          style={AuthStyles.text}
        >
          Back to Login
        </Text>
      </View>
    )
  }
}

export default Register
