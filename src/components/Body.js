import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Body() {

    const [data, setData] = useState('');

    const apiKey = 'g1IrbkBhwn0u6Y5ChOjnjRGt1LpzjkFe6KwB4w0W';

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, []);

    // .split('-').reverse().join('/')

    return (
        <View style={styles.container}>

                <View style={styles.imgBox}>
                    {data.hdurl ? <Image source={{uri: data.hdurl}} style={styles.imgApi} /> 
                    : 
                    <Text style={styles.loading}>Carregando...</Text>}
                </View>

                <View style={styles.texts}>
                    <Text style={styles.title} key={data.id}>{data.title}</Text>
                    <Text style={styles.explanation} key={data.id}>{data.explanation}</Text>
                    <Text style={styles.date} key={data.id}>{data.date}</Text>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
        marginBottom: 4,
    },
    imgBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgApi: {
        width: 300,
        height: 300
    },
    loading: {
        color: 'white',
        fontSize: 24
    },
    texts: {
        padding: 30
    },
    title: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 22
    },
    explanation: {
        color: 'white',
        fontSize: 20,
        marginBottom: 22
    },
    date: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
});
