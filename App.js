import React, { Component } from 'react';
import { Root } from "native-base"
import AppRoot from './src'

export default class App extends Component {
  render() {
    return (
      <Root style={{ flex: 1 }}>
        <AppRoot {...this.props} />
      </Root>
    );
  }
}
