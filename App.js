import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableNativeFeedback, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';


export default class Translator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    //58 :
    //123 125 { }
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', fontSize: 60 }}>
                    <Text style={{ fontSize: 80 }}>HOW</Text>
                    <Text style={{ fontSize: 80 }}>MANY</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>SHRIMPS</Text>
                    <Text style={{ fontSize: 80 }}>DO</Text>
                    <Text style={{ fontSize: 80 }}>YOU</Text>
                    <Text style={{ fontSize: 80 }}>HAVE</Text>
                    <Text style={{ fontSize: 80 }}>TO</Text>
                    <Text style={{ fontSize: 80 }}>EAT{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    <Text style={{ fontSize: 80 }}>BEFORE</Text>
                    <Text style={{ fontSize: 80 }}>YOU</Text>
                    <Text style={{ fontSize: 80 }}>MAKE</Text>
                    <Text style={{ fontSize: 80 }}>YOUR</Text>
                    <Text style={{ fontSize: 80 }}>SKIN</Text>
                    <Text style={{ fontSize: 80 }}>TURN</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>PINK?{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    <Text style={{ fontSize: 80 }}>EAT</Text>
                    <Text style={{ fontSize: 80 }}>TOO</Text>
                    <Text style={{ fontSize: 80 }}>MUCH</Text>
                    <Text style={{ fontSize: 80 }}>AND</Text>
                    <Text style={{ fontSize: 80 }}>YOU'LL</Text>
                    <Text style={{ fontSize: 80 }}>GET</Text>
                    <Text style={{ fontSize: 80, color: "#66A103" }}>SICK{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>SHRIMPS</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>ARE</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>PRETTY</Text>
                    <Text style={{ fontSize: 80, color: "#FF66CC" }}>RICH{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </View>
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                 <Image
                    style={{ flex: 1 }}
                    source={require('./media/flamingo.gif')}
                />
                
            </ScrollView>
        );
    }
};