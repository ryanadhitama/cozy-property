import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 20
  }
});
