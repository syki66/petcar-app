
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';

export default class Servo extends React.Component {

    state={
        isServoOn: false,
    }

    toggleState = () => {
        this.setState(prevState => ({
          isServoOn: !prevState.isServoOn
        }));
      }

    fetchUrlAndSetState = (url) => {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();

        this.toggleState();
    }


    render() {
        return (
            this.state.isServoOn ? (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPressIn={() => this.fetchUrlAndSetState(`${this.props.baseUrl}/servo_motor_on`)}
                        style={[styles.servo_on]}
                    >
                        <Text style={styles.text}>SERVO ON</Text>
                    </TouchableOpacity>

                </View>
            ) : (
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPressIn={() => this.fetchUrlAndSetState(`${this.props.baseUrl}/servo_motor_off`)}
                            style={[styles.servo_off]}
                        >
                            <Text style={styles.text}>SERVO OFF</Text>
                        </TouchableOpacity>
                    </View>
                )

        );
    }
}


const styles = StyleSheet.create({

    container: {
        height: 100
    },
    servo_on: {
        justifyContent: 'center',
        backgroundColor: '#8EFF69',
        flex:1

    },
    servo_off: {
        justifyContent: 'center',
        backgroundColor: '#626262',
        flex: 1
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
    },
  
  });