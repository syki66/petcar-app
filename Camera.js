import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';


const screenWidth = Dimensions.get('window').width;

export default function Camera({baseUrl}) {
    return(
        <View style={styles.container}>
        <WebView
          scrollEnabled="false"
          source={{
            html: (`
            <html>
              <head>
                <meta name="viewport" content="width=device-width, user-scalable=no">
              </head>
              <body style="margin: 0px; background: #0e0e0e;">
                <img style="width: 100%" src=${baseUrl}/video_feed>
              </body>
            </html>
          `)
          }}

        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: screenWidth * 0.75,
        width: "100%",
        
    },

});