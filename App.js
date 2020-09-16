import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import IsLogin from './IsLogin';

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

  test = () => {
    this.setState({isLogin: true});
  }


  render(){
    return (
      !this.state.isLogin ? (
        <IsLogin test = {this.test} />
      ) : (
        <SafeAreaView>
          <Text>로그인 성공</Text>
        </SafeAreaView>
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
