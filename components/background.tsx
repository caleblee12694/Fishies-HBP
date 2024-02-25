import {ImageBackground, StyleSheet, Text, View} from 'react-native';


const Background = () => {
    return(
        <View style={styles.background}>
        <ImageBackground source={require('../assets/background.png')}
        style={styles.background}>
            
        </ImageBackground>
        </View>
    )
}
export default Background;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        
    }
});