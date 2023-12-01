import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import HomeScreen from '../features/home/HomeView';
import ActivityScreen from "../features/activity/ActivityView";
import TabBar from './tabBar/TabBar';
import Header from '../components/header/Header';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={TabBar} screenOptions={{header: Header}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Surfing">
          {(props) => <ActivityScreen {...props} activityType="Surfing" />}
        </Tab.Screen>
        <Tab.Screen name="Hula">
          {(props) => <ActivityScreen {...props} activityType="Traditional Festivals" />}
        </Tab.Screen>
        <Tab.Screen name="Vulcano">
          {(props) => <ActivityScreen {...props} activityType="Volcanoes" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
