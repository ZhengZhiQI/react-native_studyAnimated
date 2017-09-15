import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
} from 'react-native';
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;
export default class PopAnimationLeft extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            translateXY : new Animated.ValueXY({
                x: -150,
                y: windowHeight
            }),
            fadeAnim:new Animated.Value(0),
            showText:this.props.children
        };
    }
    loadHide(endFunction){
        Animated.timing(
            this.state.translateXY,{
                toValue:{
                    x:-150,
                    y:0
                },
                duration:200,
                useNativeDriver: true

            }
        ).start(endFunction);


    }

    loadShow(){
        Animated.timing(
            this.state.translateXY,{
                toValue:{
                    x:0,
                    y:0
                },
                duration:700,
                useNativeDriver: true

            }
        ).start();
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,{
                toValue:1,
                duration:500,
                useNativeDriver: true,
            }
        ).start();

        Animated.timing(
            this.state.translateXY,{
                toValue:{
                    x:0,
                    y:0
                },
                duration:700,
                useNativeDriver: true

            }
        ).start();

    }

    render(){
        return (
            <Animated.View style={{opacity:this.state.fadeAnim,transform: this.state.translateXY.getTranslateTransform()}} >
                {this.state.showText}
            </Animated.View>
        )
    }
}