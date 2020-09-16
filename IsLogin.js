import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';


export default class IsLogin extends React.Component {
    state = {
        
        host: "0.0.0.0",
        port: "8080",
    }

    submitHostPort(){
        alert(`http://${this.state.host}:${this.state.port}`);
        //this.setState({isLogin : true});
        this.props.test();
    }
    
    render() {
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
})