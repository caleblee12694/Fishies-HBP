import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
    return (
        <View>
            <Image source={require('../assets/fishmenu.png')} />
        </View>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    exitbutton: {
        position: 'absolute',
        left: 279
    }
}
);