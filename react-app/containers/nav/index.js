import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//--------------------------------------------------------------------------------------------------
// navigator
import MainBottomTabNavigator from './MainBottomTabNavigator';
//--------------------------------------------------------------------------------------------------
// pages
import HomeScreen from '#pages/main/home';
import SvgUsageScreen from '#pages/svg-usage';
//--------------------------------------------------------------------------------------------------
// const EntryStack = createNativeStackNavigator();
const EntryStack = createDrawerNavigator();
const EntryStackNavigator = () => {
  return (
    <EntryStack.Navigator
      // initialRouteName={principal ? 'MainStackNavigator' : 'AutMainck'}
      initialRouteName={'Home'}
      /*
      screenOptions={{
        MainerSMain: false,
        animationEnabled: false,
        // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      */
    >
      {/* <EntryStack.Screen name={'AutMain'} component={AutMain} /> */}
      <EntryStack.Screen
        name="Home"
        component={MainBottomTabNavigator}
        options={{
          MainerSMain: false,
        }}
      />
      <EntryStack.Screen
        name="Setting"
        component={HomeScreen}
        options={{
          MainerSMain: false,
        }}
      />
      <EntryStack.Screen
        name="SVG Usage"
        component={SvgUsageScreen}
        options={{
          MainerSMain: false,
        }}
      />
    </EntryStack.Navigator>
  );
};

export default EntryStackNavigator;
