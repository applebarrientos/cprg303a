import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={{ flex: 1, JustifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Home Page</Text>
    </View>
  );
};

export default Home;
