module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./react-app'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '#tests': './__tests__',
          '#react-app': './react-app',
          '#apis': './react-app/apis',
          '#assets': './assets',
          '#commons': './react-app/commons',
          '#components': './react-app/components',
          '#constants': './react-app/constants',
          '#containers': './react-app/containers',
          '#hooks': './react-app/hooks',
          '#i18n': './react-app/i18n',
          '#pages': './react-app/pages',
          '#utils': './react-app/utils',
          '#store': './react-app/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
