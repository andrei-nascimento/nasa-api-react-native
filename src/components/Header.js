import { Image, StyleSheet, Text, View } from 'react-native';

import nasa from '../../assets/nasa.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={nasa} style={styles.nasaLogo}/>
            <Text style={styles.textLogo}>Daily Photo API</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 72,
    },
    nasaLogo: {
        width: 115,
        height: 32,
    },
    textLogo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
        marginTop: 2
    }
});
