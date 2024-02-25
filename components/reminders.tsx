import { Image, StyleSheet, Text, View } from 'react-native';

const Reminders = () => {
    return (
        <View>
            <Image source={require('../assets/reminderbox.png')} 
            style={styles.box}/>
        </View>
    )
}
export default Reminders;

const styles = StyleSheet.create({
    box: {
        top: -80
    },
    water: {

    }
})