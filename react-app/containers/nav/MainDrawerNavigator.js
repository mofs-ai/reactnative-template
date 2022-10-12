/*
SAMPLE 
*/
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//----------------------------------------------------------------------------------------------------
// Navigator
// import MainBottomTabNavigator from './MainBottomTabNavigator';
//----------------------------------------------------------------------------------------------------
// pages
import HomeScreen from '#pages/main/home';
//----------------------------------------------------------------------------------------------------
const MainDrawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <MainDrawer.Navigator initialRouteName="Home">
      {/* <MainDrawer.Screen
        name="Main"
        component={MainBottomTabNavigator}
        options={{
          headerShown: false,
        }}
      /> */}
      <MainDrawer.Screen name="Home" component={HomeScreen} />
      <MainDrawer.Screen name="Home1" component={HomeScreen} />
      <MainDrawer.Screen name="Home2" component={HomeScreen} />
      <MainDrawer.Screen name="Home3" component={HomeScreen} />
      {/* <MainDrawer.Screen name="Settings" component={SettingsScreen} /> */}
    </MainDrawer.Navigator>
  );
};

export default MainDrawerNavigator;
