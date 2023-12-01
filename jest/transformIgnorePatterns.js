const transformIgnorePatterns = [
  '/node_modules/(?!' +
    '(react-native' +
    '|@react-native' +
    '|react-native-safe-area-context' +
    '|react-native-screens' +
    '|react-redux' +
    '|@react-navigation/native' +
    '@react-navigation/bottom-tabs' +
    '@react-native-masked-view/masked-view' +
    'react-native-linear-gradient' +
    'react-native-svg' +
    '|@reduxjs/toolkit' +
    '|axios' +
    ')/)'
];

module.exports = transformIgnorePatterns;
