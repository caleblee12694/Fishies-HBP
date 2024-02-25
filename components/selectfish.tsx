import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

const SelectFish = () => {
    return (
        <Image source={require('../assets/fishselect.png')}/>
    )
}
export default SelectFish;

const styles = StyleSheet.create({
    desc: {
        fontFamily: 'Helvetica',
        fontWeight: '300',
        width: 220,
        fontSize: 18,
        left: 32,
        top: -410,
        textAlign: 'center',
        position: 'absolute',
        color: '#383a2e'
    },
    fishlabel: {
        fontFamily: 'Helvetica',
        fontWeight: '500',
        fontSize: 30,
        left: 60,
        top: -480,
        position: 'absolute',
        color: '#383a2e'
    },
    base: {
        position: 'absolute',
        bottom: 0
    },
    fishlist: {
        position: 'absolute',
        width: 250,
        height: 325,
        left: 15,
        top: -345,
    },
});