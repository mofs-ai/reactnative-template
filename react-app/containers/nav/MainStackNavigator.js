import React from 'react';
import {Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '#commons/theme';
//----------------------------------------------------------------------------------------------------
// Navigator
import MainBottomTabNavigator from './MainBottomTabNavigator';
//----------------------------------------------------------------------------------------------------
// pages
import HomeScreen from '#pages/main/home';
//----------------------------------------------------------------------------------------------------
const MainStack = createNativeStackNavigator();
const MainStackNavigator = () => {
  // const MainStack = React.useMemo(() => createNativeStackNavigator(), []);

  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          title: '',
          headerTitleStyle: {
            color: theme.colors.white,
            fontSize: 16,
            fontWeight: '500',
            fontStyle: 'normal',
            letterSpacing: 0,
            maxWidth: 220,
          },
          headerStyle: {
            backgroundColor: theme.colors.defaultBackground,
            shadowColor: 'transparent',
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View
              style={{
                paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
              }}></View>
          ),
        }}>
        <MainStack.Screen
          name="Main"
          component={MainBottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Search"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        {/*
				<MainStack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
				*/}
        {/*
        <MainStack.Screen
          name={'WebView'}
          component={Webpage}
          options={{
            headerShown: true,
            headerStatusBarHeight: 0,
            headerBackTitleVisible: false,
            title: '',
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            headerLeft: () => {
              const navigation = useNavigation<any>();
              const closeBtn = async () => {
                await navigation.goBack();
              };
              return (
                <TouchableOpacity
                  style={{width: 50, height: 50}}
                  onPress={closeBtn}>
                  <View
                    style={{
                      width: 20,
                      height: 1,
                      backgroundColor: '#888',
                      transform: [{rotate: '45deg'}],
                      position: 'absolute',
                      marginLeft: 16,
                      marginTop: 24,
                    }}
                  />
                  <View
                    style={{
                      width: 20,
                      height: 1,
                      backgroundColor: '#888',
                      position: 'absolute',
                      transform: [{rotate: '-45deg'}],
                      marginLeft: 16,
                      marginTop: 24,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
				*/}
      </MainStack.Navigator>
    </>
  );
};

export default MainStackNavigator;
