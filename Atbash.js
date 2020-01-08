import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
        style ={{height: 40}}
        placeholder="Type here to Encode text using the Atbash cypher"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Text>{this.ATBASH(this.state.text)}</Text>
      </View>
    );

  }

  ATBASH = function (toCode) {
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    var tc = toCode.split('')
    for(var i = 0; i < tc.length; i++) {
      if(letters.indexOf(tc[i]) > -1) {
        tc[i] = letters.split('')[25 - letters.indexOf(tc[i])]
      } else {
        if(letters.toUpperCase().indexOf(tc[i]) > -1) {
          tc[i] = letters.toUpperCase().split('')[25 - letters.toUpperCase().indexOf(tc[i])]
        }
      }
    }

    return(tc)
  }
};