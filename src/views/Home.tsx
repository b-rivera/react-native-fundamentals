import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

type HomeProps = {
  navigation: any
}

export class Home extends React.Component<HomeProps> {  
  constructor(props: HomeProps) {
    super(props)
  }

  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header message="Login"  navigate={navigate}/>
        <Hero/>
        <Menu navigate={navigate} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});