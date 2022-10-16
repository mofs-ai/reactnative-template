/*
https://jestjs.io/docs/configuration
*/
/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    globals: {
      __DEV__: true,
    },
    // "preset": "jest-expo",
    rootDir: './',
    automock: false,
    resetMocks: false,
    setupFiles: ['./setupJest.js'],
    transformIgnorePatterns: [
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    // setupTestFrameworkScriptFile: './setupTests.js',
    verbose: true,
    transform: {
      '^.+\\.js?$': 'babel-jest',
      // '^.+\\.svg$': 'jest-svg-transformer',
    },
  };
};
