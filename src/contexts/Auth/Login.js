import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export class Login extends Component {
  state = {
    email: null,
    password: null
  }

  goToRegister = () => {
    this.props.navigation.navigate('Register')
  }

  handleEmailTextChange = (value) => {
    this.setState({ [name]: value })
  }

  onSuccess = () => {
    this.props.navigation.navigate('AppNavigator')
  }

  submit = () => {
    // TODO: smake a fetch call to submit login info
    // TODO: render errors from fetch call on failure
    this.onSuccess()
  }

  render() {
    const emailError = this.state.email ? null : 'Email must not be blank'
    const passwordError = this.state.password ? null : 'Password must not be blank'

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <Text h1>Patient Portal</Text>
        <Text h3>Login</Text>

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

        <Button
          raised
          title='Login'
          onPress={this.submit}
        />


        <Text h4>New to Patient Portal?</Text>
        <Button
          small
          raised
          title='Register'
          onPress={this.goToRegister}
        />
      </View>
    )
  }
}

export default Login