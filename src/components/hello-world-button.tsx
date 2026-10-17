import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const HelloWorldButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? "Sembunyikan" : "Tampilkan"}
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && <Text>Hello World</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
});