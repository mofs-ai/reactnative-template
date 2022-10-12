import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//----------------------------------------------------------------------------------------------------
// pages
import HomeScreen from '#pages/main/home';
//----------------------------------------------------------------------------------------------------
const MainTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Home1" component={HomeScreen} />
      <MainTab.Screen name="Home2" component={HomeScreen} />
      <MainTab.Screen name="Home3" component={HomeScreen} />
      {/* <MainTab.Screen name="Settings" component={SettingsScreen} /> */}
    </MainTab.Navigator>
  );
};

export default MainBottomTabNavigator;
