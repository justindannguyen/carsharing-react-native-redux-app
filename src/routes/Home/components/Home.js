import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export default class Home extends Component {
  componentDidMount() {
    this.props.setName()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello {this.props.name}! This is Home component!!!</Text>
      </View>
    )
  }
}

Home.propTypes = {
  setName : PropTypes.func.isRequired,
  name : PropTypes.string
}
