import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

//import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import IsLogin from './IsLogin';
import Arrow from './Arrow';
import Camera from './Camera';



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
          <View style={styles.container}>
                <Camera 
                  baseUrl={this.state.baseUrl}
                />
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
    marginTop: getStatusBarHeight(),
},


});
