import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//----------------------------------------------------------------------------------------------------
// pages
import HomeScreen from '#pages/main/home';
import RestInScreen from '#pages/main/rest-in';
import ReduxSampleScreen from '#pages/main/redux-sample';
import UiLogincScreen from '#pages/ui-logic';
//----------------------------------------------------------------------------------------------------
const MainTab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Home1" component={RestInScreen} />
      <MainTab.Screen name="ReduxScreen" component={ReduxSampleScreen} />
      <MainTab.Screen name="UiLogincScreen" component={UiLogincScreen} />
      {/* <MainTab.Screen name="Settings" component={SettingsScreen} /> */}
    </MainTab.Navigator>
  );
};

export default MainBottomTabNavigator;
