import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Input</Text>
    </View>
  );
}
