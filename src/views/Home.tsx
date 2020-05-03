import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Header message="Login"/>
      <Text>Welcome to the Home Page!</Text>
      <Text>You can track your habits here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});