import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const App = () => {
  return (
    <View>
      <Todolist />
      <Todoform />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
