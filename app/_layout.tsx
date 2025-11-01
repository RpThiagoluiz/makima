import { SplashScreenAnimated } from '@/src/modules/home/splashScreenAnimated';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Hide native splash immediately
        SplashScreen.hideAsync();
        setIsReady(true);
        // Show custom splash when ready
        setShowCustomSplash(true);

        // Hide custom splash after 3 seconds
        setTimeout(() => {
          setShowCustomSplash(false);
        }, 3000);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  // Show custom splash screen when ready and splash is active
  if (isReady && showCustomSplash) {
    return <SplashScreenAnimated />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Slot />
    </ThemeProvider>
  );
}
