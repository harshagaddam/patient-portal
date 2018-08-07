import { createStackNavigator } from 'react-navigation'

import Home from '../contexts/Home/Home'
import MessageCenter from '../contexts/MessageCenter/MessageCenter'
import Visit from '../contexts/Visits/VisitsList'
import Visits from '../contexts/Visits/Visits'

import { fonts } from '../utils/styleVariables'

const headerStyles = {
  headerBackTitleStyle: { fontFamily: fonts.montserrat },
  headerTitleStyle: { fontFamily: fonts.montserrat },
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        ...headerStyles,
        title: 'Home'
      }),
    },

    MessageCenter: {
      screen: MessageCenter,
      navigationOptions: () => ({
        ...headerStyles,
        title: 'Message Center'
      }),
    },

    Visit: {
      screen: Visit,
      navigationOptions: () => ({
        ...headerStyles,
        title: 'Your Visit'
      }),
    },

    Visits: {
      screen: Visits,
      navigationOptions: () => ({
        ...headerStyles,
        title: 'Visits'
      }),
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default AppNavigator