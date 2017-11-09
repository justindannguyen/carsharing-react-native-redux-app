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
    const region = {
      latitude: 10.801881,
      longitude: 106.639711,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.02421
    }
    return (
      <Container>
        <MapContainer region={region}>
        </MapContainer>
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
