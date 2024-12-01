module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use babel-jest to transpile
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@adobe/css-tools)/)", // Add problematic modules here
  ],
};
