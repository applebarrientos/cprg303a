import React from "react";
import { Text } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>This is Lab 5</Text>
      <Text style={{ marginTop: 10 }}>Developed by: Apple Barrientos</Text>
      <Text>Date: {currentDate}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
