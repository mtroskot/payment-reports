module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup/setup.js"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.js",
  },
  modulePathIgnorePatterns: ["<rootDir>/__mocks__", "<rootDir>/__tests__/setup"],
};
