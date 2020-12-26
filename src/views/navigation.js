import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import Home from './Home';

/**
 * Stack Navigator
 */

const Stack = createStackNavigator();
const stackScreens = [
  {
    name: 'login',
    component: Login,
    options: {headerShown: false, gestureEnabled: false},
  },
  {
    name: 'home',
    component: Home,
    options: {headerShown: false, gestureEnabled: false},
  },
];

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {stackScreens.map((val, index) => (
        <Stack.Screen
          name={val.name}
          component={val.component}
          options={val.options}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
