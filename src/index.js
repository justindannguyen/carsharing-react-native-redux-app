import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Main extends Component {
  render() {
    return (
      <View>
        <Text>Hello, this is my Taxi App</Text>
        <Text>{this.props.instructions}</Text>
      </View>
    )
  }
}

export default Main
