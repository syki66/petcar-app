import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const input_url = "http://192.168.123.21:8080/dc_motor/3";

const option = {
  method: 'GET'
}

function fetchInterval () {
  
  setInterval(() => fetch(input_url, option),30 );
  clearInterval(fetchInterval);
}


export default function App() {
  return (
    <View style={styles.container}>

      <Button style={styles.button} onPress={clearInterval(fetchInterval)}
      title="stop please">


      </Button>

      <TouchableOpacity onPressIn={() => useEffect} onPressOut={clearInterval(fetchInterval())}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
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
