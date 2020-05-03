import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header(props: { message: any; }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggleUserLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  let display = isLoggedIn ? "Brian" : props.message;
  return (
    <View style={styles.headStyle}>
      <Text onPress={toggleUserLogin} style={styles.headText}>{display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20
  },
  headStyle: {
    
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight:10,
    backgroundColor: '#35605a'
  }
});