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

// fetch 를 http get으로 바꿔야됨
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
                      <img style="width: 100%" src="http://192.168.123.21:8080/video_feed">
                    </body>
                  </html>
                `)
                }}

              />
            </View>


            <View style={styles.arrows}>

              <View style={styles.arrowsRow}>
                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button q</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button w</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button e</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.arrowsRow}>
                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button a</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button s</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={this.startFetchInterval}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button d</Text>
                </TouchableOpacity>
              </View>

            </View>


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

  arrows: {
    backgroundColor: 'pink',
    height: 200,
  },

  arrowsRow: {
    flexDirection: 'row',
    flex:1
  },


  arrow: {
    flex:1
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
