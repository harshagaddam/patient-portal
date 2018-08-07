import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'

import VisitsStyles from './VisitsStyles'

export class Visit extends Component {

  renderProcedures = () => {
    const { visit } = this.props.navigation.state.params

    return visit.procedures.map((procedure, index) => {
      return (
        <View key={index}>
          <Text>{procedure.name}, ${procedure.cost}</Text>
          <Text>{procedure.description}</Text>
        </View>
      )
    })
  }

  render() {
    const { date, doctor, visit } = this.props.navigation.state.params

    return (
      <ScrollView contentContainerStyle={VisitsStyles.scrollContainer}>
        <Text h5 style={VisitsStyles.headerText}>{doctor}</Text>
        <Text h5 style={VisitsStyles.headerText}>{date}</Text>
        {this.renderProcedures()}

        <Text h5 style={VisitsStyles.text}>Total Cost: ${visit.totalCost}</Text>
      </ScrollView>
    )
  }
}

export default Visit
