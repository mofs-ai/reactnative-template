import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Svg, {SvgXml, SvgUri, Image} from 'react-native-svg';

const defaultUrl =
  'https://mofs.ai/static/media/logo.8c94e791ff8e88435c57fb7221b46d08.svg';

import Logo from './svg.logo';
import defaultImg from './img.base64';

const UiLogincScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>1. Component</Text>
      <SvgXml xml={Logo} width="50%" height="50%" fill={'black'} />
      <Text>2. Base64</Text>
      <Svg height="30" width="30" viewBox="0 0 20 20">
        <Image x="5%" y="5%" width="90%" height="90%" href={defaultImg} />
      </Svg>
      <Text>3. Uri</Text>
      <SvgUri
        width="100"
        height="100"
        uri={defaultUrl}
        // onError={onError}
        // onLoad={onLoad}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default UiLogincScreen;
