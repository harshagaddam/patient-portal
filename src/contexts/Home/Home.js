import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

import { colors } from '../../utils/styleVariables'
import HomeStyles from './HomeStyles'

export class Home extends Component {
  render() {
    return (
      <View style={HomeStyles.container}>
        <Text h1 style={HomeStyles.headerText}>Welcome!</Text>

        <Button raised
          title='Your Visits'
          onPress={() => { this.props.navigation.navigate('Visits') }}
          style={HomeStyles.button}
          backgroundColor={colors.primary}
        />

        <Button raised
          title='Message Center'
          onPress={() => { this.props.navigation.navigate('MessageCenter') }}
          style={HomeStyles.button}
          backgroundColor={colors.primary}
        />
      </View>
    )
  }
}

export default Home
