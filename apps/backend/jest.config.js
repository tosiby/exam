/** @type {import('jest').Config} */
module.exports = {
  rootDir: '../../',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/backend/**/*.test.js'],
  setupFiles: ['<rootDir>/config/test-env.js'],
  collectCoverageFrom: ['apps/backend/src/**/*.js'],
  clearMocks: true
};
