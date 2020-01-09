import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableNativeFeedback, Platform, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, DrawerLayoutAndroid, PanResponder, Animated } from 'react-native';

export default class FieldCypher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pan: new Animated.ValueXY()
        };
    }

    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                // Set the initial value to the current state
                this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
                this.state.pan.setValue({ x: 0, y: 0 });
            },

            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: 0 },
            ]),

            onPanResponderRelease: (e, { vx, vy }) => {
                this.state.pan.flattenOffset();
            }
        });
    }

    render() {

        let { pan } = this.state;

        let [translateX, translateY] = [pan.x, pan.y];

        let imageStyle = { transform: [{ translateX }, { translateY }] };

        return (
            <View style={styles.container}>
                <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
                    <View style={{ height: 740, backgroundColor: '#D4B64A', left: -330 }} ></View>
                </Animated.View>
            </View>
        );
    }


    ATBASH = function (toCode) {
        var letters = 'abcdefghijklmnopqrstuvwxyz'
        var tc = toCode.split('')
        for (var i = 0; i < tc.length; i++) {
            if (letters.indexOf(tc[i]) > -1) {
                tc[i] = letters.split('')[25 - letters.indexOf(tc[i])]
            } else {
                if (letters.toUpperCase().indexOf(tc[i]) > -1) {
                    tc[i] = letters.toUpperCase().split('')[25 - letters.toUpperCase().indexOf(tc[i])]
                }
            }
        }

        return (tc)
    }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
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