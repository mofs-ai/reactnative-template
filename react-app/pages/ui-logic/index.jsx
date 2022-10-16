import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

// Business Logic
import fetchLogic from './logic/fetch.data';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UiLogincScreen= () => {
  const [state,setState] = useState({data:[]})
  const renderItem = ({item}) => <Item title={item.title} />;

  useEffect(()=>{
    fetchLogic.getData('https://reqres.in/api/users/2').then(res=>{
      setState((prev)=> {
        return {...prev, data:[...res]}
      });
    });
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
