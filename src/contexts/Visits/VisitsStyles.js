import { StyleSheet } from 'react-native'
import { colors, fonts, layouts } from '../../utils/styleVariables'

export default VisitsStyles = StyleSheet.create({

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

  text: {
    color: colors.grey,
    fontFamily: fonts.montserratLight
  }
})
