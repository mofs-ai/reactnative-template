/*
https://react-native-async-storage.github.io/async-storage/docs/api
*/
import AsyncStorage from '@react-native-async-storage/async-storage';

// get
export const getStorage = async key => {
  const result = await AsyncStorage.getItem(key);
  return result && JSON.parse(result);
};

// set
export const setStorage = async (key, value) => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};

// remove
export const removeStorage = async key => {
  return await AsyncStorage.removeItem(key);
};
