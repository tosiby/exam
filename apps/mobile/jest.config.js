/** @type {import('jest').Config} */
module.exports = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/mobile/**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/apps/mobile/test/setupTests.ts']
};
