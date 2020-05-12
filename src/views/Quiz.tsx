import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import {QuizData} from '../data/QuizQuestions';
import { Question } from '../sections/Questions';

type QuizProps = {
  navigation: any,
}
type QuizState = {
  questLoaded: boolean,
  totalScore: number,
  completedQuiz: boolean,
  questList?: Array<any>,   
  numberOfQuestions: number,
  incorrect: number,
  questionAnswered: number
}

export class Quiz extends React.Component<QuizProps, QuizState> { 
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  }; 
  
  constructor(props: QuizProps) {
    super(props)
    this.state = {
        questLoaded: false,
        totalScore: 100,
        completedQuiz: false,
        numberOfQuestions: 0,
        incorrect: 0,
        questionAnswered: 0
    }
  }

  componentDidMount(){
      let numQuestions = Array.from(QuizData.questions).length;
      this.setState({
        questList: Array.from(QuizData.questions),
        questLoaded: false,        
        numberOfQuestions: numQuestions,
        incorrect: 0,
        questionAnswered: 0
      })
  }
 
  updateScore=(penalty:any) => {
    let tempScore = this.state.totalScore;
    let missed = this.state.incorrect;
    let questionsTotal = this.state.numberOfQuestions;
    let questionsDone = this.state.questionAnswered;

    let newScore = tempScore - penalty;
    let totalAnswered = questionsDone + 1;
    let totalMissed = penalty? missed + 1 : missed;

    this.setState({
      totalScore: newScore,
      incorrect: totalMissed,
      questionAnswered: totalAnswered
    })

    if (totalAnswered === questionsTotal){
      this.setState({
        completedQuiz: true
      })
    }
  }

  finishQuiz=()=>{
    this.props.navigation.navigate(
      'FinishRT', {
        score: this.state.totalScore,
        missed: this.state.incorrect,
        questions: this.state.numberOfQuestions
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { !this.state.questLoaded && (
          <FlatList
            data={this.state.questList}
            renderItem={({item}) => 
              <Question 
                question={item.question}
                answer1={item.answer1}
                answer2={item.answer2}
                answer3={item.answer3}
                answer4={item.answer4}
                correctAnswer={item.correctAnswer}
                scoreUpdate={this.updateScore}
              />
            }
          />
        )}

        { !this.state.completedQuiz && (
          <TouchableHighlight style={styles.disabled} >
            <Text>Answer all questions</Text>
          </TouchableHighlight>
        )}

        { this.state.completedQuiz && (
          <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled} >
            <Text>Finished</Text>
          </TouchableHighlight>
        )}
        
        { !this.state.questLoaded && (
          <Text>Loading...</Text>
        )}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 30
  },
  disabled:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    height: '10%'
  },
  enabled:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90ee90',
    height: '10%'
  }
});