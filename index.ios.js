/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Toast from 'react-native-root-toast';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
var status = true

class AwesomeProject2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      image: 'https://i.imgur.com/UKG9SAM.png'
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    if(status) {
      this.setState ({
        visible: true,
        image: 'https://i.imgur.com/UKG9SAM.png'
      })
      status = false
    } else {
      this.setState({
           visible: true,
           image: 'https://scontent-hkg3-1.xx.fbcdn.net/t31.0-0/q82/p600x600/13680009_983585875073349_946286271474180247_o.jpg'
      })
      status = true
    }
  }


  componentDidMount() {
          setTimeout(() => this.setState({
                      visible: true
                  }), 2000); // show toast after 2s

          setTimeout(() => this.setState({
                      visible: false
                  }), 5000); // hide toast after 5s
      };

  render() {
    let pic = {uri: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/12391348_845858058846132_6507309121831362500_n.jpg?oh=c1385d364a902ba7674605d0a2f5542a&oe=585674FD'};

    return (
      <View style={styles.container}>
        <Toast visible={this.state.visible}>asdasd</Toast>
        <Text style={styles.welcome}>
          Alecks Johanssen
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.jss
        </Text>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image style={styles.imgcorner} source={{uri: this.state.image}} />
        </TouchableOpacity>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imgcorner:{
    height: 100,
    borderRadius: 50,
    width: 100,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
