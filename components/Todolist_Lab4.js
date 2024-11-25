import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

function TodoListLab4({ tasks }) {
  return (
    <ScrollView>
      <Pressable>
        <View>
          {tasks.map((task, index) => (
            <Text key={index} style={styles.task}>
              {task}
            </Text>
          ))}
        </View>
      </Pressable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  task: {
    flex: 1,
    textAlignVertical: "center",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default TodoListLab4;
