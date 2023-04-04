module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.|(\\.|/)(test))\\.(ts)x?$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
