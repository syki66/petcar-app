import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import { getStatusBarHeight } from 'react-native-status-bar-height';


import IsLogin from './IsLogin';

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
    DCMotor: true,
    baseUrl: ""
  }

  getChildState = (baseUrl) => {
    this.setState({ baseUrl })
  }

  changeLoginStatusTrue = () => {
    this.setState({isLogin: true});
  }


  /*
  그냥 기존 fetch 함수 써도 성능 비슷한듯
  fetch(input_url, option)
  */


 fetchUrl = (path) => {
  var request = new XMLHttpRequest();
  request.open('GET', `${this.state.baseUrl}${path}`);
  request.send();
}



  startFetchInterval = (direction) => {
    //console.log("start")
    this.intervalID = setInterval(() => this.fetchUrl(direction), 50 );
    this.setState({ DCMotor: true });
    
  }

  stopFetchInterval = () => {
    //console.log("stop");
    clearInterval(this.intervalID);
    this.setState({ DCMotor: false });
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

            <View style={styles.arrows}>

              <View style={styles.arrowsRow}>
                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/4")}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button q</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/0")}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button w</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/5")}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button e</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.arrowsRow}>
                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/2")}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button a</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/1")}
                  onPressOut={this.stopFetchInterval}
                  style={styles.arrow}
                >
                  <Text>button s</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPressIn={() => this.startFetchInterval("/dc_motor/3")}
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
