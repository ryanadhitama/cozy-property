import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../../../utils';

type TabItemType = { title: string; active: boolean; onPress: () => void; onLongPress: () => void };

const TabItem = ({ title, active, onPress, onLongPress }: TabItemType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: (_) => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4
  })
});
