import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';
import { useThemeColor } from '../shared';

const { width } = Dimensions.get('window');

export function SplashScreenAnimated() {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    // Set initial state - image visible and normal size
    logoOpacity.setValue(1);
    logoScale.setValue(1);

    // After 2.5 seconds, start the zoom in and fade out transition
    const timer = setTimeout(() => {
      Animated.parallel([
        // Fade out the logo
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
        // Zoom in the logo (increase size)
        Animated.timing(logoScale, {
          toValue: 1.8,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2500);

    return () => clearTimeout(timer);
  }, [logoOpacity, logoScale]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: width * 1.2,
      height: width * 1.2,
      maxWidth: 500,
      maxHeight: 500,
    },
  });

  return (
    <View style={styles.container}>
      {/* Logo container */}
      <View style={styles.logoContainer}>
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <Image
            source={require('@/shared/assets/images/icons.png')}
            style={styles.logo}
            resizeMode="contain"
            fadeDuration={0}
            blurRadius={0}
          />
        </Animated.View>
      </View>
    </View>
  );
}
