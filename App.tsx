import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import Welcome from './components/welcome';

export default function App() {
  const [welcome, setWelcome] = useState(true)

  function removeWelcome() {
    setWelcome(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')}
        style={styles.background}>
        <TouchableWithoutFeedback onPress={removeWelcome}>
          <View style={styles.welcome}>
            {welcome === true && <Welcome />}
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
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
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
