// App.jsx
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Todoform from "./Todoform";
import TodoListLab3 from "./TodolistLab3";

const App = () => {
  // Part A: State Management
  const [tasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View>
      {/* Part B: Passing Props */}
      <TodoListLab3 tasks={tasks} />
      <Todoform />
    </View>
  );
};

export default App;
