import { Header, UnderDevelopment } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Messages = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Messages" desc="Stay connect" />
      <View style={styles.content}>
        <UnderDevelopment />
      </View>
    </SafeAreaView>
  );
};

export default Messages;

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
