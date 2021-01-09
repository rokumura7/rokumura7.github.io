module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/components/**/*.tsx',
  //   '<rootDir>/utils/**/*.ts',
  // ],
  testMatch: ['**/test/**/*.test.ts'],
}
