import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Orange = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is an Orange!</Text>
      <Image
         source={require("../assets/orangedownload (1).jpeg")}  
        style={styles.image}
      />
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
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Orange;
