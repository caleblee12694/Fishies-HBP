import { Text, View, Image, StyleSheet } from 'react-native';
import React, { useRef, useEffect } from 'react';

const FishEntry = props => {
    if (props.name === 'angelfish') {
        return (
            <View>
                <Image source={require('../assets/angelfish.png')}
                    style={styles.entry}></Image>
            </View>
        );
    };
    if (props.name === 'sardine') {
        return (
            <View>
                <Image source={require('../assets/sardine.png')}
                    style={styles.entry}></Image>
            </View>
        );
    };
    if (props.name === 'clownfish') {
        return (
            <View>
                <Image source={require('../assets/clownfish.png')}
                    style={styles.entry}></Image>
            </View>
        );
    };
}
export default FishEntry;

const styles = StyleSheet.create({
    entry: {
        marginBottom: 15
    }
})
