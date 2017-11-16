/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 * 
 * @author tuan3.nguyen@gmail.com
 * 
 * @flow
 * @format
 */
"use strict"

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import MapContainer from "./MapContainer"
import { Container } from "native-base"
import AppFooter from "../../../global/Template/containers/AppFooterContainer"

export default class Home extends Component {
  componentDidMount() {
    this.props.getCurrentLocation()
  }

  renderHome() {
    return (
      <Container>
        <MapContainer {...this.props} />
        <AppFooter />
      </Container>
    )
  }

  renderLoading() {
    return (
      <Container>
        <Text>Getting your current location...</Text>
      </Container>
    )
  }

  render() {
    return this.props.region ? this.renderHome() : this.renderLoading()
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
