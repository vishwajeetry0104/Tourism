import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import HomeScreen from '../features/home/HomeView';
import TabBar from './tabBar/TabBar';
import Header from './header/Header';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={TabBar} screenOptions={{header: Header}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Surfing" component={HomeScreen} />
        <Tab.Screen name="Hula" component={HomeScreen} />
        <Tab.Screen name="Vulcano" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
