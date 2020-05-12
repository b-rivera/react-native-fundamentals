import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export function Menu(props: { navigate: Function; }) {
  const onPress = () => {
    Alert.alert("Button was tapped");
  }

  return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigate('LessonsRT')}>
            <Text style={styles.buttonText}>LESSONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigate('RegisterRT')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
            <Text style={styles.buttonText}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigate('ContactRT')}>
            <Text style={styles.buttonText}>CONTACT</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={() => props.navigate('QuizRT')}>
            <Text style={styles.buttonText}>QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
            <Text style={styles.buttonText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:6,
    backgroundColor: '#35605a'
  },
  buttonRow:{
    flex:2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1
  },
  buttonStyles:{
    backgroundColor: '#35605a',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 18
  }
});