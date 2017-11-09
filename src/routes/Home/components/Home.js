import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import MapContainer from './MapContainer'
import { Container } from 'native-base'

export default class Home extends Component {
  componentDidMount() {
    this.props.getCurrentLocation()
  }

  render() {
    return (
      <Container>
        {this.props.region ?
          <MapContainer region={this.props.region} />
          : <Text>Getting your current location...</Text>}
      </Container>
    )
  }
}

Home.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  })
}
