import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, JustifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Home Screen</Text>
      <Link style={{ fontSize: 26, fontWeight: "bold" }} href="/lecture2/home">
        Go to Tabs
      </Link>
      {/* <Button></Button> */}
      <Button
        title="Submit"
        onPress={() => navigation.navigate("(tabs)")}
      ></Button>
    </View>
  );
};

export default Index;
