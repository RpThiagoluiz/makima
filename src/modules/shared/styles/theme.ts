/**
 * Dark + Neon Theme - Cyber gym / futuristic vibe
 * Perfect for apps focused on youth, intense workouts, and futuristic aesthetics.
 */

import { Platform } from 'react-native';

// Neon accent colors for the dark theme
const neonGreen = '#00E676'; // Primary action
const neonBlue = '#00B0FF'; // Secondary action
const neonRed = '#FF1744'; // Error / Alert

// Semantic color aliases for easier usage
export const NeonColors = {
  green: neonGreen,
  blue: neonBlue,
  red: neonRed,
  primary: neonGreen,
  secondary: neonBlue,
  danger: neonRed,
} as const;

export const Colors = {
  light: {
    // Dark mode (primary theme)
    primary: '#0E0E10', // Main background (almost black, matte)
    secondary: '#1A1A1F', // Secondary surfaces
    background: '#0E0E10', // Main background
    surface: '#1A1A1F', // Cards, modals, elevated surfaces
    accent: neonGreen, // Primary buttons, highlights
    accentSecondary: neonBlue, // Secondary actions
    error: neonRed, // Errors, destructive actions
    warning: '#FF6D00', // Warnings
    success: neonGreen, // Success states
    textPrimary: '#FFFFFF', // Main text
    textSecondary: '#9EA3A8', // Secondary text, descriptions
    textMuted: '#666666', // Disabled, placeholder text
    border: '#2A2A2F', // Subtle borders
    icon: '#9EA3A8', // Default icons
    tabIconDefault: '#9EA3A8', // Inactive tab icons
    tabIconSelected: neonGreen, // Active tab icons
    tint: neonGreen, // App tint color
  },
  dark: {
    // Dark mode (primary theme)
    primary: '#0E0E10', // Main background (almost black, matte)
    secondary: '#1A1A1F', // Secondary surfaces
    background: '#0E0E10', // Main background
    surface: '#1A1A1F', // Cards, modals, elevated surfaces
    accent: neonGreen, // Primary buttons, highlights
    accentSecondary: neonBlue, // Secondary actions
    error: neonRed, // Errors, destructive actions
    warning: '#FF6D00', // Warnings
    success: neonGreen, // Success states
    textPrimary: '#FFFFFF', // Main text
    textSecondary: '#9EA3A8', // Secondary text, descriptions
    textMuted: '#666666', // Disabled, placeholder text
    border: '#2A2A2F', // Subtle borders
    icon: '#9EA3A8', // Default icons
    tabIconDefault: '#9EA3A8', // Inactive tab icons
    tabIconSelected: neonGreen, // Active tab icons
    tint: neonGreen, // App tint color
  },
};

// Typography system with futuristic feel
export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` - Perfect for cyber aesthetic */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// Spacing system for consistent layout
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Border radius for modern, sleek components
export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
} as const;

// Shadow system for depth (subtle for dark theme)
export const Shadows = {
  sm: {
    shadowColor: neonGreen,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: neonGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: neonGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;
