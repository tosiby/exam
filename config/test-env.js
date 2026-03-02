const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../.env.test');
dotenv.config({ path: envPath });

process.env.NODE_ENV = 'test';

if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('prod')) {
  throw new Error('DATABASE_URL for tests is missing or unsafe. Use a non-production test DB URL.');
}
