import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts, layouts } from '../../utils/styleVariables'

const { deviceWidth } = Dimensions.get('window').width

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

  header: {
    padding: 30,
    width: '100%'
  },

  headerText: {
    color: colors.primary,
    fontFamily: fonts.montserratSemiBold,
  },

  listRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10
  },

  scrollContainer: {
    width: deviceWidth
  },

  text: {
    color: colors.grey,
    fontFamily: fonts.montserrat,
    lineHeight: 20,
  },

  textDark: {
    color: 'black',
    fontFamily: fonts.montserrat,
    lineHeight: 20,
  },

  visitContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '100%'
  },
})
