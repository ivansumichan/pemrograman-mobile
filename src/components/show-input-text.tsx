import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default function ShowInputText() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ketik Disini..."
        value={inputText}
        onChangeText={setInputText}
      />

      <Button title="Tampilkan" onPress={() => setSubmittedText(inputText)} />

      {submittedText !== '' && (
        <Text style={styles.result}>{submittedText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
  },
});