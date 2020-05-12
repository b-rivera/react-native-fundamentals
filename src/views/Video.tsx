import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent} from 'react-native';
import {Header} from '../sections/Header';

type VideoProps = {
  navigation: any
}
type VideoState = {
  listLoaded: boolean,
  videoList?: any     // note need to add '?' to not initialize
}

export class Video extends React.Component<VideoProps, VideoState> {  
  static navigationOptions ={
    headerShown: false // Hides default Nav bar
  };

  constructor(props: VideoProps) {
    super(props)
    this.state = {
      listLoaded: false
    }
  }

  componentDidMount(){
    return fetch(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAeuolsWdr3XH4KhS_Qt8QAnCX_PwsfzxE')
      .then((response) => response.json())
      .then((responseJson)=>{
        this.setState({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        })
      })
      .catch((error) => console.error(error))
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Header message='Login'/>
        {/* This is called a conditional render */}
        { this.state.listLoaded && (
          <View style={{paddingTop: 30}}>
            <FlatList
              data={ this.state.videoList }
              renderItem={({item}) => 
                <TubeItem
                  navigate={navigate}
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              }
            />
          </View>
        )}
      </View>
    );
  };
};

type TubeItemProps = {
  navigate:any, 
  id:any, 
  imageSrc:any, 
  title:string
} 

export class TubeItem extends React.Component<TubeItemProps>{
  onPress = () => {
    this.props.navigate('VideoDetailsRT', {ytubeId: this.props.id})
  };

  render () {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{paddingTop:20, alignItems: 'center'}}>
          <Image
            style={{width: '100%', height:200 }}
            source={{ uri: this.props.imageSrc}}
          />
          <Text>
            {this.props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
