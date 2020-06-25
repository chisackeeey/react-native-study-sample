import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, USER_INFO } from '../../constants/path';
import { Detail, UserInfo } from '../../components/pages';
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator();

export default function UserInfoNavigator() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO}>
      <Stack.Screen
        name={USER_INFO}
        component={UserInfo}
        options={{
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}
