import { StyleSheet } from 'react-native'
import { colors, fonts, layouts } from '../../utils/styleVariables'

export default AuthStyles = StyleSheet.create({

  button: {
    margin: 15,
    width: 200
  },

  container: {
    ...layouts.container
  },

  formWrap: {
    padding: '5%',
    width: '100%',
  },

  errorText: {
    color: colors.error,
    fontFamily: fonts.montserrat,
  },

  headerText: {
    color: colors.primary,
    fontFamily: fonts.montserratSemiBold
  },

  inputText: {
    color: colors.grey,
    fontFamily: fonts.montserrat,
  },

  labelText: {
    color: colors.grey,
    fontFamily: fonts.montserrat,
  },

  text: {
    color: colors.grey,
    fontFamily: fonts.montserratLight
  }
})
