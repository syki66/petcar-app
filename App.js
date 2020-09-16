import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const input_url = "http://192.168.123.21:8080/dc_motor/0";

const option = {
  method: 'GET'
}




export default class App extends React.Component {

  intervalID = 0;
  
  state = {
    motor: true
  }


  startFetchInterval = () => {
    //console.log("start")
    this.intervalID = setInterval(() => fetch(input_url, option), 50 );
    this.setState({ motor: true });
    
  }


  stopFetchInterval = () => {
    //console.log("stop");
    clearInterval(this.intervalID);
    this.setState({ motor: false });
  }


  render(){
    return (
      <View style={styles.container}>
  
 
        <TouchableOpacity onPressIn={this.startFetchInterval} onPressOut={this.stopFetchInterval}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
    );
  }


}

const styles = StyleSheet.create({
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
});
