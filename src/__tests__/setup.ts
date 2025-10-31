// Setup file for Jest tests
// import '@testing-library/jest-native/extend-expect'; // Uncomment when dependencies are installed

// Jest globals (será disponível quando Jest for instalado)
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var jest: any;
}

/*
// Mock do Expo modules (uncomment when Jest is installed)
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

jest.mock('expo-linking', () => ({
  openURL: jest.fn(),
}));

jest.mock('expo-web-browser', () => ({
  openBrowserAsync: jest.fn(),
}));
*/

/*
// Mock do react-native-reanimated (uncomment when Jest is installed)
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
*/
