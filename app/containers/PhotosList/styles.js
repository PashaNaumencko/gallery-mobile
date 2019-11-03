import { StyleSheet, Dimensions } from 'react-native';

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    right: 0,
    left: 0
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    color: '#fff',
    
  }
});
