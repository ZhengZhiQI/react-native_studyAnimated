import React, { Component } from 'react';
import {
    Animated,
    ToastAndroid,
    Text,



} from 'react-native';


export default class TestAnimatedView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { fadeAnim : new Animated.Value(1),translateXY : new Animated.ValueXY({
            x: 0,
            y: 0
        }) };

    }
    componentDidMount() {

        ToastAndroid.show("do it ",ToastAndroid.SHORT);
        // Animated.timing(this.state.translateXY.x, {
        //     toValue: 200,
        //     friction: 1,// 摩擦力，默认为7.
        //     tension: 40,// 张力，默认40。
        // }).start();
        Animated.spring(this.state.translateXY, {

            toValue: {
                x : 200,
                y : 100
            },
            friction: 1,
        useNativeDriver: true
            // duration: 1000,
            // easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
        }).start();
        // Animated.timing(
        //     this.state.marginLeft,{
        //         toValue:150,
        //         duration:2000
        //     }
            // this.state.fadeAnim,
            // {
            //     toValue: 1,
            //     duration:2000
            // },
            // this.state.translateValue,
            // {
            //     velocity: 10, // 起始速度，必填参数。
            //     deceleration: 0.8, // 速度衰减比例，默认为0.997。
            // }

        // ).start();
    }
    render(){
        return (
            <Animated.View style={{opacity:this.state.fadeAnim,transform: this.state.translateXY.getTranslateTransform()
            }}>
                {this.props.children}
            </Animated.View>
        )
    }

}