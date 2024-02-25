import {Image, StyleSheet, Text, View} from 'react-native';

const Welcome = () => {
    return(
        <Image source={require('../assets/poqua.png')}
        style={styles.image}></Image>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    image: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});