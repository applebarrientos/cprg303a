import React from "react";
import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([taskText, ...tasks]);
    }
  };

  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </MainLayout>
  );
};

export default HomeScreen;
