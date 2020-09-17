
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';



export default class Arrow extends React.Component {


  state = {

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
    this.intervalID = setInterval(() => this.fetchUrl(url), 50 );
    //this.setState({ DCMotor: true });
    
  }
  
  stopFetchInterval = () => {
    //console.log("stop");
    clearInterval(this.intervalID);
    //this.setState({ DCMotor: false });
  }








  render(){
    return(
      <View style={styles.arrows}>

      <View style={styles.arrowsRow}>
        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/4`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button q</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/0`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button w</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/5`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button e</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.arrowsRow}>
        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/2`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button a</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/1`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button s</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => this.startFetchInterval(`${this.props.baseUrl}/dc_motor/3`)}
          onPressOut={this.stopFetchInterval}
          style={styles.arrow}
        >
          <Text>button d</Text>
        </TouchableOpacity>
      </View>

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
    flex: 1
  },

});