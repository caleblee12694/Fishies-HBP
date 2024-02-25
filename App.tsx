import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Background from "./components/background";
import { fetchFishData } from "./firebase/fish_api";

export default function App() {
  // Fetch data from API and extract the value from the promise.
  fetchFishData();

 // console.log("Final ans : "+ arrayFish());
  return (
    <View style={styles.container}>
      <Background />
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