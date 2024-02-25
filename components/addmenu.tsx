import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import FishEntry from './fishentry';

const fishes = ['angelfish', 'sardine', 'clownfish', 'sardine', 'angelfish', 'sardine', 'sardine', 'clownfish'];

const ListMenu = () => {
    return (
        <View>
            <Image source={require('../assets/addmenu.png')} 
            style={styles.base}/>
            <ScrollView style={styles.fishlist}
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center'}}>
                {fishes.map((fish) => {
                    return (
                        <FishEntry name={fish}/>
                    );
                })}
            </ScrollView>
            <Text style={styles.fishlabel}>List of Fish</Text>
            <Text style={styles.desc}>Here is a list of all the fishes in your tank!</Text>
        </View>
    )
}
export default ListMenu;

const styles = StyleSheet.create({
    desc: {
        fontFamily: 'Helvetica',
        fontWeight: '300',
        width: 220,
        fontSize: 20,
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