//passing multi props
import { View, Text, Touchable, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

//parent component
const Multipleprops = () => {
  return (
    <View>
      <Childprops1 title="Submit" count={6} onPress={() => alert("Prompted")} />
    </View>
  );
};

export default Multipleprops;

// child component
const Childprops1 = ({ title, count, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "coral", padding: 10, borderRadius: 10 }}
      onPress={onPress}
    >
      <Image
        style={{ width: 130, height: 100 }}
        source={{ uri: "https://avatar.iran.liara.run/public/90" }}
      ></Image>
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        {title} (Count is: {count})
      </Text>
    </TouchableOpacity>
  );
};
