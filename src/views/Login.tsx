import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage } from 'react-native';

  type LoginProps = {
    navigation: any
  }
  type LoginState = {
    username: string,
    password: string
  }


export class Login extends React.Component<LoginProps, LoginState>{
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  cancelLogin = () => {
    Alert.alert('Login cancelled');
    this.props.navigation.navigate('HomeRT');
  }

  loginUser = () => {
    if (!this.state.username) {
      Alert.alert('Please enter a username');
    }
    else if (!this.state.password){
      Alert.alert('Passwords do not match');
    }
    else {
      AsyncStorage.getItem('userLoggedIn', (err, result) => {
        if (result!=='none'){
          Alert.alert("Someone already logged in");
          this.props.navigation.navigate('HomeRT');
        }
        else {
          AsyncStorage.getItem(this.state.username, (err, result) => {
            if (result!=='none'){
                if (result !== this.state.password){
                    Alert.alert("Password incorrect");
                }
                else {
                    AsyncStorage.setItem('userLoggedIn', this.state.username, () => {
                        Alert.alert(`${this.state.username} logged in`);
                        this.props.navigation.navigate('HomeRT');
                    })
                }
            }
            else{
                Alert.alert(`There is no account for ${this.state.username}`);
            }
          })
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login:</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <Text style={styles.labels}>Enter username</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
        /> 
        <Text style={styles.labels}>Enter Password</Text>

        <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
          <Text style = {styles.buttons}>
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
          <Text style = {styles.buttons}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop:'10%'
  },
  heading:{
    flex:1,
    fontSize:16,
    paddingBottom: 10
  },
  inputs:{
    flex:1,
    width: '80%',
    borderBottomWidth: 1
  },
  buttons:{
    marginTop: 15,
    fontSize:16
  },
  labels:{
    paddingBottom: 10
  }
});