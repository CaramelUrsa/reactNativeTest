import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableNativeFeedback, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, DrawerLayoutAndroid, PanResponder, Animated, Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native';
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class FieldCypher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            cypher: 'Substitution',
            subst: 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z',
        };
        this.letters = 'abcdefghijklmnopqrstuvwxyz'
        this.switchToPoly = this.switchToPoly.bind(this)
        this.switchToSub = this.switchToSub.bind(this)
        this.switchSubToAtbash = this.switchSubToAtbash.bind(this)
        this.resetSub = this.resetSub.bind(this)
        this.changesub = this.changesub.bind(this)
        this.test = this.test.bind(this)
    }

    render() {

        //class Editbox extends Component {
        //    render() {
        //        return (
        //            <TextInput
        //                style={{ height: 20, textAlign: 'center' }}
        //                placeholder={this.props.letter}
        //                onChangeText={(text) => this.changesub(this.props.letter, text)}
        //            />
        //        )
        //    }
        //}

        let Editbox =
            < TextInput
                style={{ height: 20, textAlign: 'center' }
                }
                placeholder={this.props.letter}
                onChangeText={(text) => this.changesub(this.props.letter, text)}
            />



        let button;
        if (this.state.cypher == 'Substitution') {
            button =
                <View>
                    <Text style={{ textAlign: 'center' }}>
                        {this.state.test}
                    </Text>
                    <Button
                        onPress={this.switchSubToAtbash}
                        title="Atbash Template"
                    />
                    <Button
                        onPress={this.resetSub}
                        title="Reset substitution template"
                    />
                </View>
        } else {
            button = <Text />
        }
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 24, padding: 30, color: '#FFFFFF' }}>Cypher Field App</Text>
                </View>
                <View style={{ flex: 9, backgroundColor: '#FFFFFF', alignItems: 'stretch' }}>
                    <View style={{ height: 60, justifyContent: 'center', backgroundColor: '#D44A85' }}>
                        <TextInput
                            style={{ height: 40, textAlign: 'center' }}
                            placeholder='Type to encode'
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>
                    <View style={{ height: 60, alignItems: 'center', backgroundColor: '#d44f4a' }}>
                        <Text style={{ fontSize: 45 }}>&#8595;{this.state.cypher}&#8595;</Text>
                    </View>
                    <View style={{ height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4ABFD4' }}>
                        <Text>{this.SUB(this.state.text)}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        {button}
                        <Text style={{ textAlign: 'center' }}>
                            CYPHERS &#8595;
                        </Text>
                    </View>
                    <View>
                        <Button
                            onPress={this.switchToPoly}
                            title="Polybius square"
                        />
                        <Button
                            onPress={this.switchToSub}
                            title="Substitution"
                        />
                        <Button
                            onPress={this.test}
                            title="test"
                        />
                        <View letter='a'>
                        {Editbox}
                        </View>
                    </View>
                </View>
            </View>

        );
    }

    test = function () {
        this.changesub('a', 'b')
    }

    changesub = function (letter, change) {
        var changing = this.state.subst.split(',')
        var index = this.letters.indexOf(letter)
        changing[index] = change

        this.setState({
            subst: changing.toString()
        })
    }

    switchToPoly = function () {
        this.setState({
            cypher: 'Polybius'
        })
    }
    switchToSub = function () {
        this.setState({
            cypher: 'Substitution'
        })
    }

    switchSubToAtbash = function () {
        this.setState({
            subst: 'z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a'
        })
    }

    resetSub = function () {
        this.setState({
            subst: 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
        })
    }

    SUB = function (toCode) {
        var subst = this.state.subst.split(',')
        var tc = toCode.toLowerCase().split('')
        for (var i = 0; i < tc.length; i++) {
            if (this.letters.indexOf(tc[i]) > -1) {
                tc[i] = subst[this.letters.indexOf(tc[i])]
            }
        }

        return (tc)
    }
}


const styles = StyleSheet.create({
    bigblue: {
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 30,
        width: 30,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1
    }
});


/*
{data.map((_, i) => (
                            <View
                                key={i}
                                style={{
                                    position: 'absolute',
                                    backgroundColor: gradientBackground,
                                    height: 1,
                                    bottom: (gradientHeight - i - 1),
                                    right: 0,
                                    left: 0,
                                    zIndex: 2,
                                    opacity: (1 / gradientHeight) * (i + 1)
                                }}
                            />
                        ))}
*/



/*
render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>
                    <Text style={{ fontSize: 24, padding: 30, color: '#FFFFFF' }}>Cypher Field App</Text>
                </View>
                <View style={{ flex: 9, backgroundColor: '#FFFFFF', alignItems: 'stretch' }}>
                    <View style={{ height: 60, justifyContent: 'center', backgroundColor: '#D44A85' }}>
                        <TextInput
                            style={{ height: 40, textAlign: 'center' }}
                            placeholder='Type to encode'
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>
                    <View style={{ height: 60, alignItems: 'center', backgroundColor: '#d44f4a' }}>
                        <Text style={{ fontSize: 69, top: -18 }}>&#8595;AZBY&#8595;</Text>
                    </View>
                    <View style={{ height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4ABFD4' }}>

                        <Text>
                            {this.ATBASH(this.state.text)}
                        </Text>
                    </View>
                </View>
            </View>

        );
    }
*/