import { Header } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Explore Now" desc="Mencari kosan yang cozy" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
});
