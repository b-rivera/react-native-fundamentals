import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native';

type LoginProps = {
  message: any,
  navigate: any
}
type LoginState = {
  isLoggedIn: boolean,
  loggedUser: any
}


export class Header extends React.Component<LoginProps, LoginState> {
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      isLoggedIn: false,
      loggedUser: false
    }
  }
  
  toggleUserLogin = () => {
    if (this.state.isLoggedIn){
      AsyncStorage.setItem('userLoggedIn', 'none', () => {
        this.setState({
          isLoggedIn: false,
          loggedUser: false
        });
      });
      Alert.alert('Successfully logged out');
    }
    else {
      this.props.navigate('LoginRT');
    }
  }

  componentDidMount(){
    console.log("Running componentDidMount on Header")
    AsyncStorage.getItem('userLoggedIn', (err, result) => {
      if (result==='none'){
        console.log("NONE");
      }
      else if (result === null){
        // only applies for first run (when item doesn't exist in storage)
        AsyncStorage.setItem('userLoggedIn', 'none', () => {
          console.log("Set user to none");
        })
      }
      else{
        console.log(result + " is logged in");
        this.setState({
          isLoggedIn: true,
          loggedUser: result
        });
      }
    })
  }

  render() {
    let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyle}
          source={require('./img/Globo_logo_REV.png')}
        />
        <Text 
          onPress={this.toggleUserLogin} 
          style={styles.headText}>{display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle: {    
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight:10,
    backgroundColor: '#35605a',
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  logoStyle:{
    flex:1,
    width: undefined,
    height: undefined
  },
  headText: {
    flex:1,
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20
  },
});