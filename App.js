import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const TabNavigator = createBottomTabNavigator({
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThree: { screen: ScreenThree }
}, {
  tabBarOptions: {
    activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

export default createAppContainer(TabNavigator);
