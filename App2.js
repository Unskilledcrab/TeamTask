import React from 'react';
import { createDrawerNavigator, StackNavigator, createAppContainer } from 'react-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const DrawerStack = createDrawerNavigator({
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThree: { screen: ScreenThree }
});

export default createAppContainer(DrawerStack);
