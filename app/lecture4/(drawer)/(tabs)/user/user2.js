import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
const User2 = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, color: "red" }}>user1</Text>
      <Link style={{ fontSize: 20, color: "red" }} href="/user/user2">
        Go to User1
      </Link>
      <MyComponent />
    </View>
  );
};

export default User2;
