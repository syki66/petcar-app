import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import { getStatusBarHeight } from 'react-native-status-bar-height';


import IsLogin from './IsLogin';

const screenWidth = Dimensions.get('window').width;

const input_url = "http://192.168.123.21:8080/dc_motor/0";

const option = {
  method: 'GET'
}


export default class App extends React.Component {

  intervalID = 0;
  
  state = {
    isLogin: false,
    DCMotor: true,
  }

  fetchUrl = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
    
      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };
    request.open('GET', 'http://192.168.123.21:8080/dc_motor/1');
    request.send();
  }

  startFetchInterval = () => {
    //console.log("start")
    this.intervalID = setInterval(() => fetch(input_url, option), 50 );
    this.setState({ DCMotor: true });
    
  }

  stopFetchInterval = () => {
    //console.log("stop");
    clearInterval(this.intervalID);
    this.setState({ DCMotor: false });
  }

  changeLoginStatusTrue = () => {
    this.setState({isLogin: true});
  }


  render(){
    return (
      this.state.isLogin ? (
        <IsLogin changeLoginStatusTrue = {this.changeLoginStatusTrue} />
      ) : (
          <View style={styles.container}>
            <WebView
              scrollEnabled = "false"
              source={{
                html: (`
                  <html>
                    <head>
                      <meta name="viewport" content="width=device-width, user-scalable=no">
                    </head>
                    <body style="margin: 0px; background: #0e0e0e;">
                      <img style="width: 100%" src="http://192.168.123.21:8080/video_feed">
                    </body>
                  </html>
                `)
              }}
              
            />
            <View style={styles.arrow}>

            </View>
          </View>
      )





      /*
      <View style={styles.container}>
  
 
        <TouchableOpacity onPressIn={this.startFetchInterval} onPressOut={this.stopFetchInterval}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
      */
    );
  }


}

const styles = StyleSheet.create({


  container: {
    height: screenWidth * 0.75,
    width: "100%",
    marginTop: getStatusBarHeight(),

    //alignSelf: 'stretch',
    //bottom: 0,
    //backgroundColor:'red'
    
  },

  arrow: {

  }
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: '50%'
  }
  */
});
