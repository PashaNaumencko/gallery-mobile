import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/color.config';

export default StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    marginRight: 5,
    width: 50,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }, 
  description: {
    color: colors.white,
  },
  descriptionText: {
    color: colors.white,
    width: 140
  },
  image: {
    flex: 1,
    height: (Dimensions.get('window').height / 2) - 4,
    margin: 2,
    padding: 2,
    position: 'relative',
    width: (Dimensions.get('window').width / 2) - 4,
  },
  info: {
    backgroundColor: colors.shadowColor,
    bottom: 0,
    left: 0,
    paddingBottom: 3,
    paddingTop: 3,
    position: 'absolute',
    right: 0
  },
  infoBox: {      
    alignItems: 'center',
    flexDirection: 'row'
  },
  textWrapper: {
    flex: 1
  }
});
