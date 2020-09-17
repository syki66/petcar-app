import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import { getStatusBarHeight } from 'react-native-status-bar-height';


import IsLogin from './IsLogin';
import Arrow from './Arrow';

const screenWidth = Dimensions.get('window').width;



// const input_url = "http://192.168.123.11:8080/dc_motor/3";


// const option = {
//   method: 'GET'
// }


// fetch 를 http get으로 바꿔야됨
export default class App extends React.Component {

  intervalID = 0;
  
  state = {
    isLogin: false,
    //DCMotor: true,
    baseUrl: ""
  }

  getChildState = (baseUrl) => {
    this.setState({ baseUrl })
  }

  changeLoginStatusTrue = () => {
    this.setState({isLogin: true});
  }







  render(){
    return (
      !this.state.isLogin ? (
        <IsLogin
          changeLoginStatusTrue={this.changeLoginStatusTrue}
          sendStateToParent={this.getChildState}
        />
      ) : (
          <View>
            <View style={styles.container}>
              <WebView
                scrollEnabled="false"
                source={{
                  html: (`
                  <html>
                    <head>
                      <meta name="viewport" content="width=device-width, user-scalable=no">
                    </head>
                    <body style="margin: 0px; background: #0e0e0e;">
                      <img style="width: 100%" src=${this.state.baseUrl}/video_feed>
                    </body>
                  </html>
                `)
                }}

              />
            </View>
                <Text>{this.state.baseUrl}</Text>

                <Arrow 
                  baseUrl={this.state.baseUrl}
                />

          </View>
      )





      /*
      <View style={styles.container}>
  
 

        
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
  },



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
