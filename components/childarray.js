import { View, Text } from "react-native";
import React from "react";

const Childarray = ({ items }) => {
  return (
    <View>
      {items.map((item, index) => (
        <Text style={{ fontSize: 20, color: "blue" }} key={index}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default Childarray;
