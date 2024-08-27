module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
  };