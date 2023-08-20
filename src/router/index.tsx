import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NotFound, Splash } from '../pages';

export type RootStackParamList = {
  Splash: undefined;
  NotFound: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Router;
