import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Hero() {
  return (
      <Image
        style={styles.heroImageStyle}
        source={require('./img/laptop2.jpg')}
      />
  );
}

const styles = StyleSheet.create({
  heroImageStyle:{
    flex:8,
    width: undefined,
    height: undefined
  }
});