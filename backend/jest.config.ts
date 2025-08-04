/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{ tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ["js", "ts", "json"],
};/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript support
  testEnvironment: 'node', // Set environment to Node.js
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest", // Transform TypeScript (and possible JSX)
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Handle custom path aliases (matches `@` to `src`)
  },
  moduleFileExtensions: ['ts', 'js', 'json'], // Recognize extensions
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'], // Detect test files
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'], // Define files for coverage
  coverageDirectory: 'coverage', // Directory to store coverage reports
};