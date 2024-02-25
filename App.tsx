import { fetchFishData } from "./firebase/fish_api";
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableWithoutFeedback, TouchableHighlight, Animated, LogBox } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Welcome from './components/welcome';
import MenuButton from './components/menubutton';
import TempNLight from './components/tempnlight';
import MenuSelect from './components/menuselect';
import ExitButton from './components/exitbutton';
import AddFish from './components/addfish';
import Nemo from './components/nemo';
import ListMenu from './components/addmenu';
import ListFish from './components/listfish';
import AddMenu from './components/realaddmenu';
import ReminderFish from './components/reminderfish';
import Reminders from './components/reminders';

LogBox.ignoreAllLogs();

const ClownLeft = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(screenWidth)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -100, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/nemo.png')} style={{ width: 83, bottom: props.bottom}} />
    </Animated.View>
  );
};

const ClownRight = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(-100)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: screenWidth, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/nemoright.png')} style={{ width: 83, bottom: props.bottom}} />
    </Animated.View>
  );
};

const AngelLeft = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(screenWidth)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -100, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/angelleft.png')} style={{ width: 83, bottom: props.bottom}} />
    </Animated.View>
  );
};

const AngelRight = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(-100)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: screenWidth, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/angelright.png')} style={{ width: 83, bottom: props.bottom}} />
    </Animated.View>
  );
};

const SardineLeft = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(screenWidth)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -100, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/sardineleft.png')} style={{ width: 70, bottom: props.bottom}} />
    </Animated.View>
  );
};

const SardineRight = props => {
  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(-100)).current; // Start off-screen to the right

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: screenWidth, // Move from left to right across the screen
        duration: props.duration, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use the native driver for better performance
      })
    ).start();
  }, [translateX, screenWidth]);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: translateX }], // Apply the translateX animation
        position: 'absolute',
      }}>
      <Image source={require('./assets/sardineright.png')} style={{ width: 70, bottom: props.bottom}} />
    </Animated.View>
  );
};




export default function App() {
  
  const [welcome, setWelcome] = useState(true);
  const [home, setHome] = useState(false);
  const [menu, setMenu] = useState(false);
  const [listMenu, setListMenu] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [reminderMenu, setReminderMenu] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;
    
  // Fetch data from API and extract the value from the promise.
  fetchFishData();

  function removeWelcome() {
    setWelcome(false);
    setHome(true);
  };
  function showMenu() {
    setMenu(true);
    setListMenu(false);
    setAddMenu(false);
    setReminderMenu(false);
  }
  function hideMenu() {
    setMenu(false);
    setListMenu(false);
    setAddMenu(false);
    setReminderMenu(false);
    setHome(true);
  }
  function showListMenu() {
    setMenu(false);
    setListMenu(true);
  }
  function showAddMenu() {
    setMenu(false);
    setListMenu(false);
    setAddMenu(true);
  }
  function showReminderMenu() {
    setMenu(false);
    setListMenu(false);
    setAddMenu(false);
    setReminderMenu(true);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')}
        style={styles.background}>

        <ClownRight bottom={-100} duration={10000}/>
        <ClownLeft bottom={125} duration={12500}/>

        <AngelRight bottom={200} duration={15000}/>
        <AngelLeft bottom={-340} duration={14000}/>

        <SardineLeft bottom={-200} duration={7000}/>
        <SardineLeft bottom={-240} duration={7800}/>
        <SardineLeft bottom={290} duration={5700}/>
        <SardineRight botttom={270} duration={9000}/>

        <TouchableWithoutFeedback onPress={removeWelcome}>
          <View style={styles.welcome}>
            {welcome === true && <Welcome />}
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={showMenu}>
          <View style={styles.menu}>
            {home === true && <MenuButton />}
          </View>
        </TouchableHighlight>
        <View style={styles.tempnlight}>
          {home === true && <TempNLight />}
        </View>
        <View style={styles.menuselect}>
          {menu === true && <MenuSelect />}
        </View>
        <TouchableHighlight onPress={hideMenu}>
          <View style={styles.exitbutton}>
            {menu === true && <ExitButton />}
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={showAddMenu}>
          <View style={styles.addfish}>
            {menu === true && <AddFish />}
          </View>
        </TouchableHighlight>
        <View style={styles.addmenu}>
          {addMenu === true && <AddMenu />}
        </View>
        <TouchableHighlight onPress={hideMenu}>
          <View style={styles.exitbutton2}>
            {addMenu === true && <ExitButton />}
          </View>
        </TouchableHighlight>
        <View style={styles.addmenu}>
          {listMenu === true && <ListMenu />}
        </View>
        <TouchableHighlight onPress={hideMenu}>
          <View style={styles.exitbutton2}>
            {listMenu === true && <ExitButton />}
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={showListMenu}>
          <View style={styles.listfish}>
            {menu === true && <ListFish />}
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={showReminderMenu}>
          <View style={styles.reminderfish}>
            {menu === true && <ReminderFish />}
          </View>
        </TouchableHighlight>
        <View style={styles.reminders}>
          {reminderMenu === true && <Reminders />}
        </View>
        <TouchableHighlight onPress={hideMenu}>
          <View style={styles.exitbutton3}>
            {reminderMenu === true && <ExitButton />}
          </View>
        </TouchableHighlight>
      </ImageBackground>
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
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    left: -5
  },
  menu: {
    top: -340,
    left: 20,
    position: 'absolute'
  },
  tempnlight: {
    top: 83,
    left: 180,
    position: 'absolute'
  },
  menuselect: {
    top: 315,
    left: 45,
    position: 'absolute'
  },
  exitbutton: {
    position: 'absolute',
    right: 28,
    top: -107
  },
  addfish: {
    position: 'absolute',
    left: 69,
    top: -54
  },
  addmenu: {
    position: 'absolute',
    left: 55,
    bottom: 160
  },
  exitbutton2: {
    position: 'absolute',
    right: 45,
    top: -195
  },
  listfish: {
    position: 'absolute',
    left: 156,
    top: -54
  },
  reminderfish: {
    position: 'absolute',
    left: 243,
    top: -54
  },
  reminders: {
    position: 'absolute',
    left: 55,
    bottom: 160
  },
  exitbutton3: {
    position: 'absolute',
    right: 45,
    top: -170
  }
});
