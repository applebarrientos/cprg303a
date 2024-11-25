import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import TodoformLab4 from "./Todoform_Lab4";
import TodoListLab4 from "./Todolist_Lab4";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View>
      <TodoListLab4 tasks={tasks} />
      <TodoformLab4 addTask={addTask} />
    </View>
  );
};

export default App;
