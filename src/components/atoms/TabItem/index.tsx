import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Home,
  HomeActive,
  Message,
  MessageActive,
  News,
  NewsActive,
  Wishlist,
  WishlistActive
} from '@assets';

type TabItemType = { title: string; active: boolean; onPress: () => void; onLongPress: () => void };

const TabItem = ({ title, active, onPress, onLongPress }: TabItemType) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <HomeActive /> : <Home />;
    }
    if (title === 'Messages') {
      return active ? <MessageActive /> : <Message />;
    }
    if (title === 'News') {
      return active ? <NewsActive /> : <News />;
    }
    if (title === 'Wishlist') {
      return active ? <WishlistActive /> : <Wishlist />;
    }
    return <Home />;
  };
  return (
    <TouchableOpacity
      style={[styles.container, { borderBottomColor: active ? '#7F74EB' : 'transparent' }]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 20, borderBottomWidth: 4 }
});
