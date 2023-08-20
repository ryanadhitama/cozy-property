import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '@assets';
import { fonts } from '@utils';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>Splash Screen</Text>
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
    marginTop: 20,
    fontFamily: fonts.primary.normal
  }
});
