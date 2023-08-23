import { Gap, Header } from '@components';
import { colors, fonts } from '@utils';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Explore Now" desc="Mencari kosan yang cozy" />
      <Text style={styles.title}>Popular Cities</Text>
      <Gap height={16} />
      <Text style={styles.title}>Recommended Space</Text>
      <Gap height={16} />
      <Text style={styles.title}>Tips & Guidance</Text>
      <Gap height={16} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: fonts.primary.normal
  }
});
