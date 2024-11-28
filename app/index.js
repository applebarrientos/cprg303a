import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  // Array of links and their corresponding labels
  const links = [
    { href: "/lab1", label: "Lab 1" },
    { href: "/lab2", label: "Lab 2" },
    { href: "/lab3", label: "Lab 3" },
    { href: "/lab4", label: "Lab 4" },
    { href: "/lab5", label: "Lab 5" },
    { href: "/lecture1", label: "Lecture 20241003" },
    { href: "/lecture2", label: "Lecture 20241017" },
    { href: "/lecture3", label: "Lecture 20241031" },
    { href: "/lecture4", label: "Lecture 20241107" },
    { href: "/lecture5", label: "Lecture 20241114" },
    { href: "/lecture6", label: "Lecture 20241121" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CPRG 303 A</Text>

      {links.map((link, index) => (
        <TouchableOpacity key={index}>
          <Link href={link.href} style={styles.link}>
            <Text style={styles.buttonText}>{link.label}</Text>
          </Link>
        </TouchableOpacity>
      ))}
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
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  link: {
    width: 250,
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
