import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of the users</Text>
      <Link href="/details/1">View user-1</Link>
      <Link href="/details/2">View user-2</Link>
      <Link href="/details/3">View user-3</Link>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
