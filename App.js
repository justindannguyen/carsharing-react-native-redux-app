import React, { Component } from 'react';
import { View } from 'react-native';
import Root from './src'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Root {...this.props} />
      </View>
    );
  }
}
