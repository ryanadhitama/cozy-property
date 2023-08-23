import { Header, UnderDevelopment } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const News = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="News" desc="Get latest update" />
      <View style={styles.content}>
        <UnderDevelopment />
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100
  }
});
