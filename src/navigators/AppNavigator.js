import { StackNavigator } from 'react-navigation'

import Home from '../contexts/Home/Home'
import MessageCenter from '../contexts/MessageCenter/MessageCenter'
import Visits from '../contexts/Visits/Visits'

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home
    },
    MessageCenter: {
      screen: MessageCenter
    },
    Visits: {
      screen: Visits
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default AppNavigator