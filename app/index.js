import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  const [pressedButton, setPressedButton] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CPRG 303 A</Text>

      {/* Button to Lab 1 */}
      <TouchableOpacity
        onPressIn={() => setPressedButton("lab1")}
        onPressOut={() => setPressedButton(null)}
      >
        <Link
          href="/lab1"
          style={[styles.link, pressedButton === "lab1" && styles.linkPressed]}
        >
          <Text style={styles.buttonText}>Lab 1</Text>
        </Link>
      </TouchableOpacity>

      {/* Button to Lab 2 */}
      <TouchableOpacity
        onPressIn={() => setPressedButton("lab2")}
        onPressOut={() => setPressedButton(null)}
      >
        <Link
          href="/lab2"
          style={[styles.link, pressedButton === "lab2" && styles.linkPressed]}
        >
          <Text style={styles.buttonText}>Lab 2</Text>
        </Link>
      </TouchableOpacity>

      {/* Button to Lab 3 */}
      <TouchableOpacity
        onPressIn={() => setPressedButton("lab3")}
        onPressOut={() => setPressedButton(null)}
      >
        <Link
          href="/lab3"
          style={[styles.link, pressedButton === "lab3" && styles.linkPressed]}
        >
          <Text style={styles.buttonText}>Lab 3</Text>
        </Link>
      </TouchableOpacity>

      {/* Button to Lecture 2 */}
      <TouchableOpacity
        onPressIn={() => setPressedButton("lecture2")}
        onPressOut={() => setPressedButton(null)}
      >
        <Link
          href="/lecture2"
          style={[
            styles.link,
            pressedButton === "lecture2" && styles.linkPressed,
          ]}
        >
          <Text style={styles.buttonText}>Lecture 20241017</Text>
        </Link>
      </TouchableOpacity>

      {/* Button to Lecture 3 */}
      <TouchableOpacity
        onPressIn={() => setPressedButton("lecture3")}
        onPressOut={() => setPressedButton(null)}
      >
        <Link
          href="/lecture3"
          style={[
            styles.link,
            pressedButton === "lecture3" && styles.linkPressed,
          ]}
        >
          <Text style={styles.buttonText}>Lecture 20241031</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "gray",
  },
  text: {
    fontSize: 40,
    fontFamily: "Courier",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  link: {
    width: 200, // Fixed width for all buttons
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center", // Center text within the button
  },
  linkPressed: {
    backgroundColor: "#104e8b", // Darker shade for pressed state
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
