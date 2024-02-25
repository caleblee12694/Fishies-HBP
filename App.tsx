import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Background from './components/background'
import {write_to_db} from './write_to_db.js';

export default function App() {

  console.log("Writing to database");
  write_to_db();
  return (
    <View style={styles.container}>
      <Background/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
