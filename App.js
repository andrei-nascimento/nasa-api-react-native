import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';

export default function App() {

  const [data, setData] = useState('');
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
      <Header />

      <View style={styles.home}>
        <Text style={styles.text}>{status}</Text>
        <Text style={styles.textApi} key={data.id}>{data.date}</Text>
        <Text style={styles.textApi} key={data.id}>{data.title}</Text>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  home: {
    marginBottom: 100
  },
  text: {
    backgroundColor: 'red',
    color: 'white'
  },
  textApi: {
    backgroundColor: 'white',
    color: 'blue',
    fontSize: 20
  }
});
