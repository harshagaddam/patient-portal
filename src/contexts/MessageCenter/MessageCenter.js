import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import { colors } from '../../utils/styleVariables'
import MessageStyles from './MessageStyles'

export class MessageCenter extends Component {
  render() {
    return (
      <View style={MessageStyles.container}>

        <Button raised
          title='Messages Received'
          // onPress={() => { this.props.navigation.navigate('Received') }}
          style={MessageStyles.button}
          backgroundColor={colors.primary}
        />

        <Button raised
          title='Messages Sent'
          // onPress={() => { this.props.navigation.navigate('Sent') }}
          style={MessageStyles.button}
          backgroundColor={colors.primary}
        />

        <Button raised
          title='Send a Message'
          // onPress={() => { this.props.navigation.navigate('Compose') }}
          style={MessageStyles.button}
          backgroundColor={colors.primary}
        />
      </View>
    )
  }
}

export default MessageCenter
