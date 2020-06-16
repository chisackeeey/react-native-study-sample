import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as UiContext from './contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [applicationState, setApplicationState] = React.useState(UiContext.createApplicationInitialState());

  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </UiContext.Context.Provider>
  );
}
