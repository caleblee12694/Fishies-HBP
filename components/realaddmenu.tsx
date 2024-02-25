import { Image, StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react'
import FishEntry from './fishentry';



const AddMenu = () => {
    const [select, setSelect] = useState(false);

    function nextPage() {
        setSelect(true);
    }

    return (
        <View>
            <Image source={require('../assets/addmenu.png')}
                style={styles.base} />
            {select === false && <ScrollView style={styles.fishlist}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <TouchableWithoutFeedback onPress={nextPage}>
                    <View>
                        <FishEntry name="clownfish" />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={nextPage}>
                    <View>
                        <FishEntry name="angelfish" />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={nextPage}>
                    <View>
                        <FishEntry name="sardine" />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>}
            {select === true && <Image source={require('../assets/fishselect.png')} />}
            <Text style={styles.fishlabel}>Add Fish</Text>
            <Text style={styles.desc}>Recommended fish to add based on your tank water!</Text>
        </View>
    )
}
export default AddMenu;

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
        left: 74,
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