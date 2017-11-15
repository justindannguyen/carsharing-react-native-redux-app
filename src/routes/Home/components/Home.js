/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 * 
 * @author tuan3.nguyen@gmail.com
 * 
 * @flow
 * @format
 */
'use strict'

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
        {this.props.region ? (
          <MapContainer {...this.props} />
        ) : (
          <Text>Getting your current location...</Text>
        )}
      </Container>
    )
  }
}

Home.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  setPickupLocation: PropTypes.func.isRequired,
  pickupLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  setDropLocation: PropTypes.func.isRequired,
  dropoffLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  })
}
