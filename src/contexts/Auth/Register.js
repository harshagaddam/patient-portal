import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export class Register extends Component {
  state = {
    email: null,
    password: null,
    passwordConfirmation: null
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleEmailTextChange = (value) => {
    this.setState({ [name]: value })
  }

  submit = () => {
    // TODO: smake a fetch call to submit registration info
    // TODO: render errors from fetch call
  }

  render() {
    const emailError = this.state.email ? null : 'Email must not be blank'
    const passwordError = this.state.password ? null : 'Password must not be blank'
    
    const passwordConfirmationError = () => {
      if (!this.state.passwordConfirmation) {
        return 'Please type your password again to confirm'

      } else if (this.state.passwordConfirmation !== this.state.password) {
        return 'Password and password confirmation do not match'

      } else return null
    }

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <Text h1>Patient Portal</Text>
        <Text h3>Register</Text>

        <FormLabel>Email</FormLabel>
        <FormInput
          name='email'
          onChangeText={this.handleTextChange}/>
        <FormValidationMessage>{emailError}</FormValidationMessage>

        <FormLabel>Password</FormLabel>
        <FormInput
          name='password'
          secureTextEntry
          onChangeText={this.handleTextChange}/>
        <FormValidationMessage>{passwordError}</FormValidationMessage>

        <FormLabel>Confirm Password</FormLabel>
        <FormInput
          name='passwordConfirmation'
          secureTextEntry
          onChangeText={this.handleTextChange}/>
        <FormValidationMessage>{passwordConfirmationError()}</FormValidationMessage>

        <Button
          large
          raised
          title='Register'
          onPress={this.submit}
        />


        <Text h4>Have a Patient Portal account?</Text>
        <Button
          small
          raised
          title='Login'
          onPress={this.goToLogin}
        />
      </View>
    )
  }
}

export default Register
