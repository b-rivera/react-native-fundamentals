import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';

type Props = {
  navigation: any,
}
type State = {
}

export class Finish extends React.Component<Props, State> { 
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: Props) {
    super(props)
  }

exitQuiz=()=>{
    this.props.navigation.navigate('HomeRT');
}

  render() {
    let userScore = this.props.navigation.getParam('score', 'Error - No score');
    let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');
    let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions');
    return (
      <View style={styles.container}>
        <Text>Your quiz score was {userScore}</Text>
        <Text>You missed {questionsMissed} out of {totalQuestions} questions</Text>

        <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
          <Text>Finish Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%'
  }
});