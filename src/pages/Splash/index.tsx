import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { House, Logo } from '@assets';
import { colors, fonts } from '@utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@components';

const Splash = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.page}>
      <View style={styles.header}>
        <Logo />
        <Text style={styles.title}>Find Cozy House to Stay and Happy</Text>
        <Text style={styles.desc}>Stop membuang banyak waktu pada tempat yang tidak habitable</Text>
        <Button title="Explore Now" />
      </View>
      <View style={styles.bottom}>
        <Image source={House} style={styles.bottomImg} />
        <View style={styles.bottomBackground} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 24,
    marginTop: 30,
    fontFamily: fonts.primary[500],
    color: colors.text.primary
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 40,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  },
  bottom: {
    position: 'relative'
  },
  bottomBackground: {
    height: 289,
    backgroundColor: colors.secondary
  },
  bottomImg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2
  }
});
