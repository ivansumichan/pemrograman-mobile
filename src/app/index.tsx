import * as Device from 'expo-device';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { HelloWorldButton } from '@/components/hello-world-button';
import ShowInputText from '@/components/show-input-text';

type Photo = { uri: string };

export default function HomeScreen() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const showAlertPrimakara = () => {
                // Judul    Isinya
    Alert.alert('Helo', 'Primakara Luar Biasa')
  }

  // Buka galeri, pilih maksimal 10 foto
  const pickPhotos = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: 10,
        quality: 1,
      });

      if (result.canceled) return;

      setPhotos(result.assets.map((asset) => ({ uri: asset.uri })));
    } catch (e) {
      console.warn('Gagal membuka galeri', e);
      Alert.alert('Error', 'Gagal membuka galeri.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Button title='Klik Alert' onPress={showAlertPrimakara} />
        <Button title='Pilih 10 Foto' onPress={pickPhotos} />

        <FlatList
          data={photos}
          keyExtractor={(item, index) => item.uri + index}
          numColumns={3}
          style={styles.list}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
        />

        <HelloWorldButton/>

        <ShowInputText/>
        
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  list: {
    alignSelf: 'stretch',
  },
  image: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 2,
    borderRadius: 6,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});