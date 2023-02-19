import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Body() {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState('Carregando...');

    const apiKey = 'g1IrbkBhwn0u6Y5ChOjnjRGt1LpzjkFe6KwB4w0W';

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        setStatus('Dados carregados com sucesso!')
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{status}</Text>
            <Text style={styles.textApi} key={data.id}>{data.date}</Text>
        </View>
    );
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    text: {
        backgroundColor: 'red',
        color: 'white'
    },
    textApi: {
        backgroundColor: 'white',
        color: 'blue'
    }
});
