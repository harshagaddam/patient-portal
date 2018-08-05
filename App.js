import React, { Component } from 'react'

import AppNavigator from './src/navigators/AppNavigator'
import Login from './src/contexts/Auth/Login'
import Register from './src/contexts/Auth/Register'

const RootStack = createStackNavigator(
  {
    AppNavigator: {
      screen: AppNavigator
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    initialRouteName: 'Login',
  },
  {
    headerMode: 'none'
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
