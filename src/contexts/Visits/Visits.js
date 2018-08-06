import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import AnimatedEllipsis from 'react-native-animated-ellipsis'

import { generateVisits } from '../../utils/generateVisits'

import VisitsList from './VisitsList'


export class Visits extends Component {
  state = {
    loading: false,
    visits: []
  }

  componentDidMount() {
    this.setState({ loading: true })

    const visits = generateVisits()
    this.setState({ visits, loading: false })
  }
 

  renderLoading = () => {
    return (
      <View>
        <Text>
          Loading Visits
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
        <View>
          <Text h1>Visits</Text>
          <VisitsList visits={this.state.visits} />
        </View>
      )
    }
  }
}

export default Visits
