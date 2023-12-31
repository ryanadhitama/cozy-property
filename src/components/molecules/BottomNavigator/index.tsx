import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../utils';
import { TabItem } from '../../atoms';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export type BottomNavigatorProps = {
  title?: string;
  photo?: any;
  onPress?: () => void;
  desc?: string;
};

const BottomNavigator = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: width - 48,
    right: 24,
    bottom: 20,
    marginBottom: 12,
    backgroundColor: colors.grey,
    borderRadius: 23
  }
});
