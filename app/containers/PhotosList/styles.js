import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/color.config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }, 
  image: {
    height: (Dimensions.get('window').height / 2) - 4,
    margin: 2,
    padding: 2,
    width: (Dimensions.get('window').width / 2) - 4,
    flex: 1,
    position: 'relative'
  },
  infoBox: {
    position: 'absolute',
    backgroundColor: colors.shadowColor,
    // padding: '0 2',
    bottom: 0,
    right: 0,
    left: 0
  },
  avatar: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    color: colors.white,

  },
  descriptionText: {
    color: colors.white,
  }
});
