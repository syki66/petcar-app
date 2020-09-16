import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

const input_url = "http://192.168.123.21:8080/dc_motor/0";

const option = {
  method: 'GET'
}




export default class App extends React.Component {

  intervalID = 0;
  
  state = {
    host: "0.0.0.0",
    port: "8080",
    
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

  submitHostPort(){
    alert(`http://${this.state.host}:${this.state.port}`);
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          placeholder="HOST 입력" 
          onChangeText={(text) => this.setState( {host: text})}
          style={styles.input}
        />
        
        <TextInput
          placeholder="PORT 입력"
          onChangeText={(text) => this.setState({ port: text })}
          style={styles.input}
        />


        <TouchableOpacity 
          onPress={() => { this.submitHostPort() }}
          style={styles.button}
        >
          <Text>제출</Text>
        </TouchableOpacity>

      </SafeAreaView>




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
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center'
  },

  input: {
    borderWidth: 2,
    borderColor: '#B7D0E7',
    margin: 20,
    height: 50,
    fontSize: 50,
    textAlign: 'center'
  },

  button: {
    margin: 20,
    height: 50,
    fontSize: 50,
    color: 'green',
    backgroundColor: 'green',
    justifyContent: 'center'
    
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
