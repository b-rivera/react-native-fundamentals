import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/views/Home';
import { Contact } from './src/views/Contact';
import { Video } from './src/views/Video';
import { VideoDetails } from './src/views/VideoDetails';
import { Register } from './src/views/Register';
import { Login } from './src/views/Login';
import { Quiz } from './src/views/Quiz';
import { Finish } from './src/views/QuizFinished';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Route Navigator maps screens to each route
const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video,
  },
  VideoDetailsRT: {
    screen: VideoDetails
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  }
},
{
  initialRouteName: 'HomeRT'
}
);

const App = createAppContainer(MyRoutes);
export default App;