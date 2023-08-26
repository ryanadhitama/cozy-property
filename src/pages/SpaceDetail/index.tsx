import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, fonts } from '@utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@components';

const SpaceDetail = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Button style={{ width: 210 }} title="Book Now" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default SpaceDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 24,
    marginTop: 70,
    fontFamily: fonts.primary[500],
    color: colors.text.primary
  }
});
