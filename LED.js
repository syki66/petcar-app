
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';

export default class LED extends React.Component {

    fetchUrl = (url) => {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
      }


    render() {
        return (
          <View>
            <View style={styles.container}>
              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/0`)}
                style={[styles.led, styles.white]}
              >
                <Text style={styles.text}>white</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/1`)}
                style={[styles.led, styles.red]}
              >
                <Text style={styles.text}>red</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/2`)}
                style={[styles.led, styles.green]}
              >
                <Text style={styles.text}>green</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/3`)}
                style={[styles.led, styles.blue]}
              >
                <Text style={styles.text}>blue</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/4`)}
                style={[styles.led, styles.cyan]}
              >
                <Text style={styles.text}>cyan</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/5`)}
                style={[styles.led, styles.magenta]}
              >
                <Text style={styles.text}>magenta</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_on/6`)}
                style={[styles.led, styles.yellow]}
              >
                <Text style={styles.text}>yellow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/led_off`)}
                style={[styles.led, styles.off]}
              >
                <Text style={styles.text}>OFF</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
      flexDirection: 'row',
      height: 50
      
    },
    led: {
      flex: 1,
      justifyContent: 'center',
      margin: 3,
      borderRadius: 10
      
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
    },

    white:{
      backgroundColor: 'white',
    },
    red:{
      backgroundColor: 'red',
    },
    green:{
      backgroundColor: 'green',
    },
    blue:{
      backgroundColor: 'blue',
    },
    cyan:{
      backgroundColor: 'cyan',
    },
    magenta:{
      backgroundColor: 'magenta',
    },
    yellow:{
      backgroundColor: 'yellow',
    },
    off:{
      backgroundColor: 'gray',
    },
  
  });