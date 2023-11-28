const transformIgnorePatterns = [
  '/node_modules/(?!' +
    '(react-native' +
    '|@react-native' +
    '|react-native-safe-area-context' +
    '|react-native-screens' +
    '|react-redux' +
    '|@react-navigation/native' +
    '|@react-navigation/native-stack' +
    '@react-navigation/bottom-tabs' +
    'react-native-svg' +
    '|@reduxjs/toolkit' +
    '|axios' +
    ')/)'
];

module.exports = transformIgnorePatterns;
