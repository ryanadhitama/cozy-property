import { Header } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Wishlist" desc="Save your favorite here" />
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
});
