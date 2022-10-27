# reactnative-template

## install module

```shell
1. prerequisites
module-resolver
babel-plugin-module-resolver

https://fbflipper.com/

2. react naviagtion : https://reactnavigation.org/
https://reactnavigation.org/docs/getting-started/
2-0.
npm install react-native-screens react-native-safe-area-context

2-1
npm install react-native-gesture-handler react-native-reanimated

https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

[babel.config.js]
  module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
npm start -- --reset-cache


2-2. bottom
basic : https://reactnavigation.org/docs/bottom-tab-navigator/
meteriacl : https://reactnavigation.org/docs/material-bottom-tab-navigator/

npm install @react-navigation/bottom-tabs

2-3. stack
npm install @react-navigation/native @react-navigation/native-stack


3. react api client
3-0. install
* axios
https://github.com/axios/axios
https://axios-http.com/
npm install axios

<error> 2022-04-27 : 0.27.2 ==upgrade==> Pre-release v1.0.0-alpha.1  ::2022-05-30
https://github.com/axios/axios/issues/4998
--> current 0.27.2

* dayjs ==> customize to use ==> day2js
https://day.js.org/
npm install dayjs

* async-storage
https://github.com/react-native-async-storage/async-storage
https://react-native-async-storage.github.io/async-storage/
https://react-native-async-storage.github.io/async-storage/docs/install

npm install @react-native-async-storage/async-storage
npx pod-install


4. redux & thunk
A Predictable State Container for JS Apps
https://redux.js.org/

npm install redux react-redux redux-thunk

* examples - redux-toolkit
The official, opinionated, batteries-included toolset for efficient Redux development
https://redux-toolkit.js.org/
https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/kitchen-sink?from-embed
npm install @reduxjs/toolkit react-redux

5. svg usage
https://github.com/software-mansion/react-native-svg

npm install react-native-svg
cd ios && pod install && cd ..

5-1. daum post code
Daum PostCode Service User Guide
https://postcode.map.daum.net/guide

React Native Cross-Platform WebView
https://github.com/react-native-webview/react-native-webview

npm i react-native-webview

6. tdd exmample
jest
https://jestjs.io/

[React Testing Library]
React Testing Library
https://testing-library.com/docs/react-testing-library/intro/
npm install --save-dev @testing-library/react

React Native Testing Library (RNTL)
https://github.com/callstack/react-native-testing-library
npm install --save-dev @testing-library/react-native

enzyme
https://github.com/enzymejs/enzyme


*  [@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.
https://github.com/react-native-async-storage/async-storage/issues/768
npm install --save-dev 'est-fetch-mock

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
require('jest-fetch-mock').enableMocks();
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);



```

### reset & pod

```shell
npm start -- --reset-cache
pod install --repo-update

npm run ios --reset-cache

* react native upgrade
react-native upgrade
```
