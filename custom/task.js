import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getTasks } from "./api";

const Tasks = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const result = await getTasks();
      console.log("fetch data: ", result);
      setData(result);
    } catch (error) {
      console.error("error in fetching data: ", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      {data.length > 0 ? (
        data.map((task) => (
          <View key={task.id}>
            <Text>Tasks</Text>
            <Text>Name: {task.name}</Text>
            <Text>Title: {task.title}</Text>
            <Text>ID: {task.id}</Text>
          </View>
        ))
      ) : (
        <Text>Loading data...</Text>
      )}
    </ScrollView>
  );
};

export default Tasks;
