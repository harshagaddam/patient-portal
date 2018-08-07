import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { List, ListItem, Text } from 'react-native-elements'
import moment from 'moment'

import VisitsStyles from './VisitsStyles'

export class VisitsList extends Component {

  doctorName = (doctor) => {
    const { first_name, middle_name, last_name, title } = doctor.profile

    if (middle_name) {
      return `${first_name} ${middle_name} ${last_name}, ${title}`
    } else {
      return `${first_name} ${last_name}, ${title}`
    }
  }

  goToVisit = (visit) => {
    const date = moment(visit.date).format('MMM D, YYYY')
    const doctor = this.doctorName(visit.doctor)
    this.props.navigation.navigate('Visit', { date: date, doctor: doctor, visit: visit })
  }

  renderSubtitle = (visit) => {
    return (
      <View style={VisitsStyles.listRow}>
        <Text style={VisitsStyles.text}>{moment(visit.date).format('MMM D, YYYY')}</Text>
        <Text style={VisitsStyles.text}>{visit.totalCost}</Text>
      </View>
    )
  }

  render() {
    return (
      <List containerStyle={{ width: '100%' }}>
        {this.props.visits.map((visit, index) => (
          <ListItem
            key={index}
            onPress={() => { this.goToVisit(visit) }}
            title={this.doctorName(visit.doctor)}
            subtitle={this.renderSubtitle(visit)}
          />
        ))}
      </List>
    )
  }
}

VisitsList.propTypes = {
  navigation: PropTypes.object.isRequired,
  visits: PropTypes.array.isRequired
}

export default VisitsList
