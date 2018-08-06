import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Login from './src/contexts/Auth/Login'
import Register from './src/contexts/Auth/Register'

const RootStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
},
{
  initialRouteName: 'Login',
})

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
