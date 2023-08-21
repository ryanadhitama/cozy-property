import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, Messages, News, NotFound, Splash, Wishlist } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '@components';

export type RootStackParamList = {
  Splash: undefined;
  NotFound: undefined;
  MainApp: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Messages: undefined;
  News: undefined;
  Wishlist: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const MainApp = () => {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
      <Tab.Screen name="News" component={News} options={{ headerShown: false }} />
      <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Router;
