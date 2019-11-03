import { createAppContainer  } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import PhotosList from '../../containers/PhotosList';
import PhotoPage from '../../containers/PhotoPage';

const AppNavigator = createStackNavigator(
  {
    PhotosList,
    PhotoPage
  },
  {
    initialRouteName: 'PhotosList',
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '600'
      }
    }
  }
);

export default createAppContainer(AppNavigator);