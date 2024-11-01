import { View, Text } from "react-native";
import React from "react";
import Childarray from "./childarray";

//parent component
const Arraycustomprops = () => {
  const items = ["Apples", "Bananas", "Cherries", "Oranges", "Berries"];
  return (
    <View>
      <Childarray items={items} />
    </View>
  );
};

export default Arraycustomprops;
