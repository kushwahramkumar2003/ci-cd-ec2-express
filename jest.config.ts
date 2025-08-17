import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  detectOpenHandles: true, // Helps identify what's keeping Jest alive
  forceExit: true, // Forces Jest to exit after tests complete
  testTimeout: 10000, // 10 second timeout for tests
  clearMocks: true, // Clear mock calls between tests
  resetMocks: true, // Reset mock implementations between tests
  globals: {
    "ts-jest": {
      useESM: false,
    },
  },
};

export default config;
