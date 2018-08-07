import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'
import AnimatedEllipsis from 'react-native-animated-ellipsis'

import { generateVisits } from '../../utils/generateVisits'
import VisitsList from './VisitsList'
import VisitsStyles from './VisitsStyles'

export class Visits extends Component {
  state = {
    loading: true,
    visits: []
  }

  componentDidMount = async () => {
    const visits = await generateVisits()
    this.setState({ visits, loading: false })
  }

  renderLoading = () => {
    return (
      <View style={VisitsStyles.container}>
        <Text style={VisitsStyles.text}>
          Loading
          <AnimatedEllipsis />
        </Text>
      </View>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()

    } else {
      return (
        <ScrollView contentContainerStyle={VisitsStyles.scrollContainer}>
          <VisitsList
            navigation={this.props.navigation}
            visits={this.state.visits} />
        </ScrollView>
      )
    }
  }
}

export default Visits
