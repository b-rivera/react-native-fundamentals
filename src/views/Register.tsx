import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage } from 'react-native';

  type RegisterProps = {
    navigation: any
  }
  type RegisterState = {
    username: string,
    password: string,
    passConfirm: string
  }


export class Register extends React.Component<RegisterProps, RegisterState>{
  static navigationOptions ={
  headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: RegisterProps) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passConfirm: ''
    }
  }

  cancelRegister = () => {
    Alert.alert('Registration cancelled');
    this.props.navigation.navigate('HomeRT');
  }

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert('Please enter a username');
    }
    else if (this.state.password !== this.state.passConfirm){
      Alert.alert('Passwords do not match');
    }
    else {
      AsyncStorage.getItem(this.state.username, (err, result) => {
        if (result!==null){
          Alert.alert(`${this.state.username} already exists`);
        }
        else {
          AsyncStorage.setItem(this.state.username, this.state.password, () => {
            Alert.alert(`${this.state.username} account created`);
            this.props.navigation.navigate('HomeRT');
          })
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register Account:</Text>

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

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({passConfirm: text})}
          value={this.state.passConfirm}
          secureTextEntry={true}
        />    
        <Text style={styles.labels}>Confirm Password</Text>

        <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
          <Text style = {styles.buttons}>
            Register
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
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