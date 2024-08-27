import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/WelcomePage";
import React from "react";

// This is a simple example of a React Native app.
export default function App() {
  return (
    <View style={styles.container}>
      <React.Fragment>
        <Text id='text' >Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
            {WelcomePage ? <WelcomePage /> : <Text>We ran into some issues! {id}</Text>}
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
