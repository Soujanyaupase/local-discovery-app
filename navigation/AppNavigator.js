import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import VendorDetailScreen from '../screens/VendorDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Locafy' }} 
/>
        <Stack.Screen name="VendorDetail" component={VendorDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
