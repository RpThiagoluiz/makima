import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button, useThemeColor } from '../../src/modules/shared';

export default function HomeScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  const handleEnterApp = () => {
    router.push('/(home)/(tabs)');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 60,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      width: '100%',
      maxWidth: 300,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Entrar no App" onPress={handleEnterApp} variant="primary" />
      </View>
    </View>
  );
}
