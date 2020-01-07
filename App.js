/*
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', etext: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
        style={{height: 40}}
        placeholder="Type to translate"
        onChangeText={(text) => this.setState({etext: text})}
        value={this.state.etext}/>
        <Text style={{padding: 10, fontSize: 42}}>
          {(this.state.etext)}
        </Text>
      </View>
    );
    
  }
  encode = function (toCode) {
    var letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ')
    var tc = toCode.split('')
    for(i = 0; i < toCode.length - 1; i++) {
      if(letters.indexOf(tc[i]) < -1) {
        tc[i] = letters[26 - (letters.indexOf(tc[i]))]
      }
    }
    return(tc)
  }
};
*/

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'the letter "d" makes a dental plosive, the letter "m" makes a nasal bilabial nasal', etext: '' };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.text}</Text>
        <Text>{this.ATBASH(this.state.text)}</Text>
      </View>
    );

  }
  A1Z26 = function (toCode) {
    var letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ')
    var tc = toCode.split('')
    for (var i = 0; i < tc.length; i++) {
      if (letters.indexOf(tc[i]) > -1) {
        tc[i] = '|' + (letters.indexOf(tc[i]) + 1).toString() + '|'
      }
    }
    return (tc)
  }

  ATBASH = function (toCode) {
    var letters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ')
    var tc = this.A1Z26(toCode)
    for(i = 0; i < tc.length; i++) {
      if(tc[i].indexOf('|') == 0 && tc[i].indexOf('|', tc[i].indexOf('|')) + 1 == tc[i].length){
        tc[i]
      }
    }
    return (tc)
  }
};