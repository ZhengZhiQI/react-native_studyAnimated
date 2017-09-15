/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  ScrollView
} from 'react-native';
import PopAnimationRight from './PopAnimationRight'
import PopAnimationLeft from './PopAnimationLeft'
let testData=require('./data/test.json');

var pages =[];
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class TestDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { display: '点我！',showRefersh:false,shouldShowLoad:false};
    }

    pushAnswer(){
        pages.push(
            <PopAnimationLeft>
                <Text style={{fontSize: 20,width:300}} stroke="#000"   >我是一个答案，凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数</Text>
            </PopAnimationLeft>
        );
        this.setState({
            shouldShowLoad:true
        });

    }
    answerPress(){
        if (this.myLoadView !== undefined) {
            this.myLoadView.loadHide(() => this.pushAnswer());
        }


    }
    askPress() {
        if (this.myLoadView !== undefined) {
            this.myLoadView.loadShow();
        }
           this.setState({
               shouldShowLoad:true
           });
        pages.push(
            <PopAnimationRight >
                <Text style={{fontSize: 20,width:150}} stroke="#000">我是一个问题</Text>
            </PopAnimationRight>
        );

    }


  render() {
      var loadView = this.state.shouldShowLoad?
          <PopAnimationLeft ref={(ref) => this.myLoadView = ref}>
          <Text style={{fontSize: 20,width:150}} stroke="#000">等待数据</Text>
          </PopAnimationLeft>:null;

    return (
        <ScrollView>
            <View>
        <Text style={{fontSize: 20,textAlign: 'center',margin: 10}} onPress={this.askPress.bind(this)}>
            假装提问
        </Text>
          <Text style={{fontSize: 20,textAlign: 'center',margin: 10}}  onPress={this.answerPress.bind(this)}>
            假装回答
          </Text>
          {pages}
          {loadView}
            </View>
      </ScrollView>
    );
  }


}


const styles = StyleSheet.create({

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestDemo', () => TestDemo);
