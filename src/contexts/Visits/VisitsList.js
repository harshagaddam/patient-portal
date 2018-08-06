import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { List, ListItem, Text } from 'react-native-elements'

export const VisitsList = (props) => {

  doctorName = (doctor) => {
    const { first_name, middle_name, last_name, title } = doctor.profile
    return `${first_name} ${middle_name} ${last_name}, ${title}`
  }

  return (
    <List>
      {props.visits.map((visit, index) => (
        <ListItem
          key={index}
          title={doctorName(visit.doctor)}
          subtitle={
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text>{visit.date}</Text>
              <Text>{visit.totalCost}</Text>
            </View>
          }
        />
      ))}
    </List>
  )
}

VisitsList.propTypes = {
  visits: PropTypes.array.isRequired
}

export default VisitsList
