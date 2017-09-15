import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
} from 'react-native';
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;
export default class PopAnimationRight extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            translateXY : new Animated.ValueXY({
                x: windowWidth-150,
                y: windowHeight
            })
        };

    }

    componentDidMount() {
        Animated.spring(
            this.state.translateXY.y,{
                toValue:0,
                duration:1000,
                useNativeDriver: true
            }
        ).start();

    }

    render(){
        return (

            <Animated.View style={{transform: this.state.translateXY.getTranslateTransform()}}>
                {this.props.children}
            </Animated.View>

        )
    }
}