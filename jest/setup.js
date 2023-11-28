import 'react-native';

global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: console.info,
  debug: console.debug
};
