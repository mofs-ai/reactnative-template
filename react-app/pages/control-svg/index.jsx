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

// Business Logic
import fetchLogic from './logic/fetch.data';

const defaultImg = '';

const defaultUrl =
  'https://mofs.ai/static/media/logo.8c94e791ff8e88435c57fb7221b46d08.svg';

import Logo from './svg.log';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UiLogincScreen = () => {
  const [state, setState] = useState({data: []});
  const renderItem = ({item}) => <Item title={item.title} />;

  useEffect(() => {
    fetchLogic.getData('https://reqres.in/api/users/2').then(res => {
      setState(prev => {
        return {...prev, data: [...res]};
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* // 1 component  */}
      <SvgXml xml={Logo} width="50%" height="50%" fill={'black'} />
      {/* // base64  */}
      <Svg height="30" width="30" viewBox="0 0 20 20">
        <Image x="5%" y="5%" width="90%" height="90%" href={defaultImg} />
      </Svg>
      {/* // uri   */}
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
