import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotFound as NotFoundIcon } from '@assets';
import { colors, fonts } from '@utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@components';

const NotFound = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.page}>
      <NotFoundIcon />
      <Text style={styles.title}>Where are you going?</Text>
      <Text style={styles.desc}>Seems like the page that you were requested is already gone</Text>
      <View>
        <Button style={{ width: 210 }} title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  title: {
    fontSize: 24,
    marginTop: 70,
    fontFamily: fonts.primary[500],
    color: colors.text.primary
  },
  desc: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 50,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textAlign: 'center'
  }
});
