import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as UiContext from '../../contexts/ui';
import { CHOOSE_LOGIN, HOME } from '../../constants/path';

const Stack = createStackNavigator();

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={CHOOSE_LOGIN} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={HOME} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={HOME} component={HOME} />;
  }
}
