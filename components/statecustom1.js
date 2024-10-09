import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";

const Statecustom1 = () => {
  const [counter, setCounter] = useState(0);
  const [likes, setLikes] = useState(5);
  const [name, setName] = useState();
  const [person, setPerson] = useState({
    name: "Eriza",
    age: 25,
    designation: "technician",
  });
  const [status, setStatus] = useState(true);
  const [input, setInput] = useState("Enter your message here");
  const Handlepress = () => {
    setCounter(counter + 1);
  };
  const Handlepress1 = () => {
    setLikes(likes + 1);
  };
  const Handlepress2 = () => {
    setLikes(likes - 1);
  };
  const Handlepress3 = () => {
    setName("Eriza");
    setPerson({ name: "Apple", age: 41, designation: "developer" });
  };
  const Handlepress4 = () => {
    setStatus(false);
  };
  const Handlepress5 = () => {
    setInput(text);
  };

  return (
    <View style={styles.container}>
      <Button title="Update Person" onPress={Handlepress3}></Button>
      <Text style={styles.textstyle}>
        {person.name} {person.age} {person.designation}
      </Text>
      <Button title="Update Status" onPress={Handlepress4}></Button>
      <Text style={styles.textstyle}>{status ? "Thursday" : "Friday"}</Text>

      <Text style={styles.textstyle}>
        Initial value for the Counter is:{counter}{" "}
      </Text>
      <Button title="Increment" onPress={Handlepress}></Button>
      <Button
        title="Decrement"
        onPress={() => setCounter(counter - 1)}
      ></Button>
      <View style={styles.container2}>
        <TouchableOpacity onPress={Handlepress1}>
          <Image
            style={styles.imageStyle}
            source={{ uri: "https://avatar.iran.liara.run/public/73" }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={Handlepress2}>
          <Image
            style={styles.imageStyle}
            source={{ uri: "https://avatar.iran.liara.run/public/56" }}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.textstyle}>Likes: {likes}</Text>
      <Button title="Likes" onPress={Handlepress1}></Button>

      <TextInput
        value={input}
        // onChangeText={(text) => setInput(text)}
        onChangeText={Handlepress5}
        style={{
          width: "80%",
          height: "10%",
          backgroundColor: "white",
          margin: "20px",
        }}
      ></TextInput>
    </View>
  );
};

export default Statecustom1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    // display: "flex",
    // flexDirection: "row",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
  },
  textstyle: {
    fontSize: 26,
    color: "#fff",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
