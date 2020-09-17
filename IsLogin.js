import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';


export default class IsLogin extends React.Component {
    state = {
        host: "0.0.0.0",
        port: "8080",
    }

    sendDataToParent = () => {
      this.props.sendStateToParent(`http://${this.state.host}:${this.state.port}`);
    }

    checkUrlValidation = (url, host) => {
      if (host.includes('.')) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
          if (request.readyState !== 4) {
            return;
          }

          if (request.status === 200) {
            alert('접속 성공');
            this.sendDataToParent()
            this.props.changeLoginStatusTrue();
          } else {
            alert('접속 실패.\n호스트, 포트, 서버를 다시 한번 확인해주세요.');
          }
        };
        request.open('GET', url);
        request.send();
      } else {
        alert('접속 실패.\n호스트, 포트, 서버를 다시 한번 확인해주세요.');
      }
    }

    submitHostPort = () => {
        const baseUrl = `http://${this.state.host}:${this.state.port}/`;
        this.checkUrlValidation(baseUrl, this.state.host);
    }
    
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <TextInput 
              placeholder="HOST 입력" 
              keyboardType="numeric"
              onChangeText={(text) => this.setState( {host: text})}
              style={styles.input}
            />
            
            <TextInput
              placeholder="PORT 입력"
              keyboardType="numeric"
              onChangeText={(text) => this.setState({ port: text })}
              style={styles.input}
            />
    
            <TouchableOpacity 
              onPress={() => { this.submitHostPort() }}
              style={styles.button}
            >
              <Text style={styles.text}>제출</Text>
            </TouchableOpacity>
    
          </SafeAreaView>
        )    

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
      margin: 10,
      height: 50,
      fontSize: 50,
      textAlign: 'center'
    },
  
    button: {
      margin: 10,
      height: 50,
      fontSize: 50,
      color: 'green',
      backgroundColor: 'green',
      justifyContent: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white'
    }
})