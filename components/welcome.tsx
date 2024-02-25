import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const Welcome = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            <Image source={require('../assets/poqua.png')}
                style={styles.image}></Image>
        </Animated.View>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});