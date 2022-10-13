/*
rest api test
https://reqres.in
*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

// assets
import assets from '#assets';

import {httpClient} from '#apis';

const RestInScreen = () => {
  const [state, setState] = React.useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    (async () =>
      await httpClient.get('https://reqres.in/api/users?page=2').then(res => {
        setState({...res});
      }))();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Image style={{width: 48, height: 48}} source={assets.default_logo} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.BasicBlack : Colors.white,
          }}>
          <Text>{JSON.stringify(state)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default RestInScreen;
