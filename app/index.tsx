import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import fruits from "../components/FruitList"; // Ensure this path is correct and case-sensitive.

const Index: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App</Text>
      {fruits.map((fruit: string, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push(`/${fruit.toLowerCase()}`)}
        >
          <Text style={styles.fruitText}>{fruit}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  fruitText: {
    fontSize: 18,
    color: "blue",
    marginVertical: 5,
  },
});

export default Index;
