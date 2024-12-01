module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(\\@adobe/css-tools)/)", // Ensure Adobe CSS Tools gets transpiled
  ],
  testEnvironment: "jsdom",
};
