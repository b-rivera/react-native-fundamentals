import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

type VideoDetailsProps = {
  navigation: any
}

export class VideoDetails extends React.Component<VideoDetailsProps> {
    static navigationOptions ={
      headerShown: false // Hides default Nav bar
    };

    constructor(props: VideoDetailsProps) {
      super(props)
    }

    render() {
      let tubeId = this.props.navigation.getParam('ytubeId', 'No Video');
      let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
      return (
        <WebView
          style={{marginTop:20}}
          javaScriptEnabled={true}
          source={{uri: tubeUrl}}
        />
      )
    }
}