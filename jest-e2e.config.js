module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './e2e',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.|(\\.|/)(spec))\\.(ts)x?$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
