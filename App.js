import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeartRate from "./src/heartRate";

// This is a simple example of a React Native app.
export default function App() {
  return (
    <View style={styles.container}>
      <React.Fragment>
          <StatusBar style="auto" />
          {HeartRate ? <HeartRate /> : <Text>We ran into some issues! {id}</Text>}
      </React.Fragment>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
