import { View, Text } from "react-native";
import React from "react";

//parent component
const Custompropex1 = () => {
  return (
    <View>
      <Childprops name="john" status="software developer" />
    </View>
  );
};

export default Custompropex1;

const Childprops = (props) => {
  return (
    <View>
      <Text style={{ fontsize: 20 }}>{props.name}</Text>
      <Text style={{ fontsize: 20 }}>{props.status}</Text>
    </View>
  );
};
