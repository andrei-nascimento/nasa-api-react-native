import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Body />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000'
  }
});
