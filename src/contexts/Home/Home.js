import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text h1>Welcome!</Text>

        <Button
          small
          raised
          title='Your Visits'
          onPress={() => { this.props.navigation.navigate('Visits') }}
        />

        <Button
          small
          raised
          title='Message Center'
          onPress={() => { this.props.navigation.navigate('MessageCenter') }}
        />
      </View>
    )
  }
}

export default Home