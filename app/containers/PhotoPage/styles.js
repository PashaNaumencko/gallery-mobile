import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: (Dimensions.get('window').height),
    width: (Dimensions.get('window').width), 
  }
});