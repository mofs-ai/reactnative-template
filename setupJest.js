import jest from 'jest';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
require('jest-fetch-mock').enableMocks();
jest?.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
