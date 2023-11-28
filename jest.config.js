const transformIgnorePatterns = require('./jest/transformIgnorePatterns');

module.exports = {
  verbose: true,
  preset: 'react-native',
  transformIgnorePatterns,
  setupFiles: [
    '<rootDir>/jest/mockSetup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup.js'
  ],
  fakeTimers: {
    enableGlobally: true
  },
  maxWorkers: '50%',
  coverageThreshold: {
    global: {
      branches: 60.0,
      functions: 78.0,
      lines: 80.0,
      statements: 80.0
    }
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/jest/assetsTransformer.js',
    "\\.svg": "<rootDir>/__mocks__/svgMock.js"
  },
  coverageDirectory: './jest/coverage/',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html', 'cobertura'],
  reporters: [
    'default',
    ['jest-junit', {suiteName: 'TigerhallContent', outputDirectory: './jest'}],
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/index.ts',
    '!src/App.tsx',
    '!src/navigation/Router.tsx',
    '!src/store/**/*',
    '!src/api/**/*',
    '!index.d.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(dist|node_modules)/'
  ],
  collectCoverage: false,
  globals: {
    __DEV__: true
  }
};
