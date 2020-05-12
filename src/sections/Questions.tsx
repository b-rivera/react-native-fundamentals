import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

type QuestionProps = {
  //navigation: any,
  question: any,
  answer1: any,
  answer2: any,
  answer3: any,
  answer4: any,
  correctAnswer: any,
  scoreUpdate: Function
}
type QuestionState = {
  selected: boolean,
  correct: boolean
}

export class Question extends React.Component<QuestionProps, QuestionState> { 
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: QuestionProps) {
    super(props)
    this.state = {
        selected: false,
        correct: false
    }
  }

  chooseAnswer=(ans: any)=>{
      let worth = 25;
      if (ans == this.props.correctAnswer){
          this.setState({
              selected: true,
              correct: true
          });
          this.props.scoreUpdate(0);
      }
      else{
        this.setState({
            selected: true
        });
        this.props.scoreUpdate(worth);
      }
  }

  render() {
    return (
      <View style={styles.container}>
        { !this.state.selected && (
        <View style={styles.container}>
            <Text style={styles.questionText}>{this.props.question}</Text>
            <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer1')}>
                <Text style = {styles.answerText}>{this.props.answer1}}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer2')}>
                <Text style = {styles.answerText}>{this.props.answer2}}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer3')}>
                <Text style = {styles.answerText}>{this.props.answer3}}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#d3d3d3' onPress={() => this.chooseAnswer('answer4')}>
                <Text style = {styles.answerText}>{this.props.answer4}}</Text>
            </TouchableHighlight>
        </View>
        )}
        { this.state.selected && this.state.correct && (
            <View style={styles.correctContainer}>
                <Text style={styles.questionText}>{this.props.question}</Text>
                <Text style = {styles.answerText}>{this.props.answer1}</Text>
                <Text style = {styles.answerText}>{this.props.answer2}</Text>
                <Text style = {styles.answerText}>{this.props.answer3}</Text>
                <Text style = {styles.answerText}>{this.props.answer4}</Text>
                <Text style = {styles.answerText}>Correct!</Text>
            </View>
        )}
        { this.state.selected && !this.state.correct && (
            <View style={styles.wrongContainer}>
                <Text style={styles.questionText}>{this.props.question}</Text>
                <Text style = {styles.answerText}>{this.props.answer1}</Text>
                <Text style = {styles.answerText}>{this.props.answer2}</Text>
                <Text style = {styles.answerText}>{this.props.answer3}</Text>
                <Text style = {styles.answerText}>{this.props.answer4}</Text>
                <Text style = {styles.answerText}>Wrong Answer!</Text>
            </View>
        )}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 20
  },
  correctContainer:{
    flex:1,
    paddingTop: 20,
    backgroundColor: '#008000'
  },
  wrongContainer:{
    flex:1,
    paddingTop: 20,
    backgroundColor: '#ff0000'
  },
  questionText:{
      flex:2,
      padding:15,
      fontSize:20
  },
  answerText:{
      flex:2,
      padding:15,
      fontSize:20,
      textAlign: 'center'
  }
});