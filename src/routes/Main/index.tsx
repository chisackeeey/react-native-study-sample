import React from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import * as UiContext from '../../contexts/ui';
import { CHOOSE_LOGIN, HOME } from '../../constants/path';

const Stack = createStackNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStayle: {
    opacity: current.progress,
  },
});

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

function AuthWithRoutes() {
  const uiContext = React.useContext(UiContext.Context);
  return <Stack.Navigator></Stack.Navigator>;
}

export default AuthWithRoutes;
