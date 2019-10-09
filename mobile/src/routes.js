import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createStackNavigator(
          {
            Dashboard,
            Details,
          },
          {
            headerLayoutPreset: 'center',
            defaultNavigationOptions: {
              headerTintColor: '#418bf9',
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
