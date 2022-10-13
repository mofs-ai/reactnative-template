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

* dayjs ==> customize to use
https://day.js.org/
npm install dayjs

* async-storage
https://github.com/react-native-async-storage/async-storage
https://react-native-async-storage.github.io/async-storage/
https://react-native-async-storage.github.io/async-storage/docs/install

npm install @react-native-async-storage/async-storage
npx pod-install
```

### reset & pod

```shell
npm start -- --reset-cache
pod install --repo-update

* react native upgrade
react-native upgrade
```
