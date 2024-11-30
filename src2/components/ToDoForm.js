import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import tasksData from "../data/tasks.json";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleGenerateRandomTask = () => {
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setTaskText(randomTask);
    }
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.buttonContainer}>
        <Button
          title="Generate Random Task"
          onPress={handleGenerateRandomTask}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#808080"
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ToDoForm;
