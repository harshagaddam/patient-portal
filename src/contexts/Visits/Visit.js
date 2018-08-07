import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'

import VisitsStyles from './VisitsStyles'

export class Visit extends Component {

  renderProcedures = () => {
    const { visit } = this.props.navigation.state.params

    return visit.procedures.map((procedure, index) => {
      return (
        <View key={index} style={VisitsStyles.visitContainer}>
          <Text style={VisitsStyles.textDark}>{procedure.name}: ${procedure.cost}</Text>
          <Text style={VisitsStyles.text}>{procedure.description}</Text>
        </View>
      )
    })
  }

  render() {
    const { date, doctor, visit } = this.props.navigation.state.params

    return (
      <ScrollView contentContainerStyle={VisitsStyles.scrollContainer}>

        <View style={VisitsStyles.header}>
          <Text h4 style={VisitsStyles.headerText}>{doctor}</Text>
        </View>

        <View style={VisitsStyles.visitContainer}>
          <Text h5 style={VisitsStyles.headerText}>{date}</Text>
        </View>

        {this.renderProcedures()}

        <View style={VisitsStyles.visitContainer}>
          <Text style={VisitsStyles.textDark}>Total Cost: ${visit.totalCost}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Visit
