
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

export default class Arrow extends React.Component {


  state = {
    powerMode: false,
    //DCMotor: true,
    //baseUrl: ""
  }



  fetchUrl = (url) => {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
  }
  
  startFetchInterval = (url) => {
    //console.log("start")
    this.intervalID = setInterval(() => this.fetchUrl(url), 100 );
    //this.setState({ DCMotor: true });
    
  }
  
  stopFetchInterval = () => {
    //console.log("stop");
    clearInterval(this.intervalID);
    //this.setState({ DCMotor: false });
  }


  toggleState = () => {
    this.setState(prevState => ({
      powerMode: !prevState.powerMode
    }));
  }


  render() {
    return (
      <View>
        <ToggleSwitch
          isOn={this.state.powerMode}
          onColor="green"
          offColor="gray"
          label="Power Mode"
          labelStyle={{ color: "black", fontWeight: "800" }}
          size="large"
          onToggle={this.toggleState}
        />


        {this.state.powerMode ? (
          <View style={styles.arrows}>

            <View style={styles.arrowsRow}>
              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/4`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>⟲</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/0`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>↑</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/5`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>⟳</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.arrowsRow}>
              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/2`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>←</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/1`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>↓</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/3`)}
                onPressOut={() => this.fetchUrl(`${this.props.baseUrl}/dc_motor/6`)}
                style={styles.arrow}
              >
                <Text style={styles.text}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.arrows}>

            <View style={styles.arrowsRow}>
              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/4`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>⟲</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/0`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>↑</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/5`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>⟳</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.arrowsRow}>
              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/2`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>←</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/1`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>↓</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor_interval/3`)}
                onPressOut={this.stopFetchInterval}
                style={styles.arrow}
              >
                <Text style={styles.text}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        )}

      </View>

  )

  }
}

const styles = StyleSheet.create({
  arrows: {
    backgroundColor: 'pink',
    height: 200,
    
  },

  arrowsRow: {
    flexDirection: 'row',
    flex: 1
    
  },


  arrow: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 100
  }

});