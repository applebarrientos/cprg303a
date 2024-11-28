import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import TodoformLab4 from "./Todoform_Lab4";
import TodoListLab4 from "./Todolist_Lab4";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([taskText, ...tasks]);
    }
  };

  return (
    <View>
      <TodoformLab4 addTask={addTask} />
      <TodoListLab4 tasks={tasks} />
    </View>
  );
};

export default App;
