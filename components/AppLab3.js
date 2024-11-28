// App.jsx
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoListLab3 from "./TodolistLab3";

const App = () => {
  const [tasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View>
      <TodoListLab3 tasks={tasks} />
      <Todoform />
    </View>
  );
};

export default App;
