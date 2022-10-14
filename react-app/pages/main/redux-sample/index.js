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
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// assets
import assets from '#assets';

// reducer action
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {setSampleInfo} from '#store/sample/action';

// time
import day2js from '#utils/tz.dayjs';

const ReduxSampleScreen = () => {
  const dispatch = useDispatch();
  // const {sample} = useSelector(state => state, shallowEqual);
  const {sample} = useSelector(state => state);
  const [state, setState] = React.useState({});
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  /*
  React.useEffect(() => {
    init && setIsLoading(true);
  }, [principal]);
*/
  React.useEffect(() => {
    console.log('[redux useEffect]<changing data>:', sample);
  }, [sample]);
  // React.useEffect(() => { }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Image style={{width: 48, height: 48}} source={assets.default_logo} />
          <Button
            onPress={() => {
              dispatch(
                setSampleInfo(`name test: ${day2js().format('hh:mm:ss')}`),
              );
            }}
            // title={t('switchLanguage', {lng: 'en'})}
            title={'Redux Test'}
          />
          <Text>{sample?.name || '-- Not Found --'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReduxSampleScreen;
