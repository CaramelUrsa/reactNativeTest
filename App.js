import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableNativeFeedback, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, DrawerLayoutAndroid, PanResponder, Animated, Table, TableWrapper, Rows, Cols, Cell } from 'react-native';
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class FieldCypher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            think: '',
            cypher: 'Polybius',
            subst: 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z',
            substate: 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z',
        };
        this.letters = 'abcdefghijklmnopqrstuvwxyz'
        this.switchToPoly = this.switchToPoly.bind(this)
        this.switchToSub = this.switchToSub.bind(this)
        this.switchSubToAtbash = this.switchSubToAtbash.bind(this)
        this.resetSub = this.resetSub.bind(this)
        this.changesub = this.changesub.bind(this)
        this.test = this.test.bind(this)
        this.compairitor = this.compairitor.bind(this)
    }

    render() {
        let button;
        if (this.state.cypher == 'Substitution') {
            button =
                <View>
                    <TextInput
                        style={{ height: 20, textAlign: 'center', textAlignVertical: 'center' }}
                        placeholder='seperate by commas'
                        onChangeText={(text) => this.compairitor(text)
                        }
                        value={this.state.subst}
                    />
                    <Text style={{ textAlign: 'center' }}>
                        {this.state.thing}
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
            if (this.state.cypher == 'Polybius') {
                button =
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.blankCell}><Text></Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>1</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>2</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>3</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>4</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>5</Text></View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.cell}><Text style={styles.cellText}>1</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>A</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>F</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>L</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>Q</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>V</Text></View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.cell}><Text style={styles.cellText}>2</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>B</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>G</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>M</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>R</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>W</Text></View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.cell}><Text style={styles.cellText}>3</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>C</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>H</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>N</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>S</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>X</Text></View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.cell}><Text style={styles.cellText}>4</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>D</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>I/J</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>O</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>T</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>Y</Text></View>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.cell}><Text style={styles.cellText}>5</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>E</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>K</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>P</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>U</Text></View>
                                <View style={styles.cell}><Text style={styles.cellText}>Z</Text></View>
                            </View>
                        </View>
                    </View>
            }
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
                        <Text>{this.dis(this.state.text)}</Text>
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

    compairitor = function (textp) {
        var commaCount = 0
        for (var i = 0; i < textp.length; i++) {
            if (textp.charAt(i) == ',') {
                commaCount++
            }
        }
        if (commaCount == 25) {
            this.setState({
                subst: textp
            })
        }
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

    a1z26 = function (toCode) {
        var subst = toCode.toLowerCase().split("")
        for (var i = 0; i < subst.length; i++) {
            if (this.letters.indexOf(subst[i]) > -1) {
                subst[i] = this.letters.indexOf(subst[i]) + 1
            }
        }
        subst = subst.toString()
        return (subst)
    }

    PentiDec = function (toenc) {
        if (toenc) {
            var toc = toenc.split(",")
            for (var i = 0; i < toc.length; i++) {
                var ones = (Math.floor(toc[i]/5) + 1).toString()
                var tens = (toc[i] % 5).toString()
                toc[i] = ' {' + ones + ',' + tens + '} '
            }
            return (toc)
        }
    }

    dis = function (text) {
        if (this.state.cypher == 'Substitution') {
            return (this.SUB(text))
        }
        if (this.state.cypher == 'Polybius') {
            return (this.PentiDec(this.a1z26(text)))
        }
    }

    SUB = function (toCode) {
        var subst = this.state.subst.split(',')
        var tc = toCode.toLowerCase().split('')
        for (var i = 0; i < tc.length; i++) {
            if (this.letters.indexOf(tc[i]) > -1) {
                tc[i] = subst[this.letters.indexOf(tc[i])]
            }
        }
        tc = tc.toString()
        return (tc)
    }
}


const styles = StyleSheet.create({
    cell: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        color: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 5
    },
    blankCell: {
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 50,
        width: 50,
        color: '#FFFFFF',
    },
    cellText: {
        fontSize: 24,
    }
});