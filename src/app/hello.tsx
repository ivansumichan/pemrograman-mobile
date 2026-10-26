import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Hello() {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedText type="title">Detail Page</ThemedText>
      <SafeAreaView>
        <Button title="About" onPress={() => router.push("/(tabs)/about")} />
      </SafeAreaView>
    </ThemedView>
  );
}