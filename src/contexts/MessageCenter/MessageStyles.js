import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts, layouts } from '../../utils/styleVariables'

const { deviceWidth } = Dimensions.get('window').width

export default MessageStyles = StyleSheet.create({

  button: {
    margin: 15,
    width: 200
  },

  container: {
    ...layouts.container
  },

  errorText: {
    color: colors.error,
    fontFamily: fonts.montserrat,
  },

  headerText: {
    color: colors.primary,
    fontFamily: fonts.montserratSemiBold
  },

  scrollContainer: {
    ...layouts.container,
    justifyContent: 'flex-start',
    width: deviceWidth
  },

  text: {
    color: colors.grey,
    fontFamily: fonts.montserratLight
  }
})
