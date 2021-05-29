module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  bail: true,
  coverageDirectory: '<rootDir>/src/__tests__/coverage',
  coverageProvider: 'v8'
};
