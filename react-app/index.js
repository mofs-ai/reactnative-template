/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  UIManager,
  LogBox,
  useColorScheme,
  View,
  Text,
} from 'react-native';
// DevTools

// Prerequisites
import theme from '#commons/theme';
// import App
import AppContainer from '#containers';

// Context

// Redux

// i18n

/*
 // CodePush
 import codePush from 'react-native-code-push';
 */

// Platform
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  // const store = createStore(reducer, applyMiddleware(thunk));

  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.defaultBackground}
      />
      <AppContainer />
    </>
  );
};

const styles = isDarkMode =>
  StyleSheet.create({
    global: {
      flex: 1,
      backgroundColor: isDarkMode ? theme.colors.darker : theme.colors.lighter,
    },
  });

export default App;
