import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/WelcomePage";
import CurrencyConverter from "./src/currencyconverter";

// This is a simple example of a React Native app.
export default function App() {
  return (
    <View style={styles.container}>
      <React.Fragment>
          <StatusBar style="auto" />
            {WelcomePage ? <WelcomePage /> : <Text>We ran into some issues! {id}</Text>}
            <CurrencyConverter />
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
