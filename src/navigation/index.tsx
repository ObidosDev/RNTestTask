import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './rootStack';

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default RootNavigator;
