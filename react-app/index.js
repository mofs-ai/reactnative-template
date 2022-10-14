/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  UIManager,
  LogBox,
  useColorScheme,
} from 'react-native';
// Prerequisites
import theme from '#commons/theme';
// import App
import AppContainer from '#containers';

// Redux
import {Provider} from 'react-redux';

//Redux
import store from '#store';

// i18n

// DevTool
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
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store} styles={styles(isDarkMode)}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.defaultBackground}
      />
      <AppContainer />
    </Provider>
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
