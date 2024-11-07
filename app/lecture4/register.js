import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tasks from "../../custom/task";

const Register = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Register Screen</Text> */}
      <Tasks />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});