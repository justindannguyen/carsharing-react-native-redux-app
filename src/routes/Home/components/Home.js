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
import LoadingIndicator from "./LoadingIndicator"
import FindDriver from "./FindDriver"

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
    return <LoadingIndicator />
  }

  renderBookingRequest() {
    return (
      <FindDriver
        bookingRecord={this.props.bookingRecord}
        cancelBookingTaxi={this.props.cancelBookingTaxi}
      />
    )
  }

  render() {
    if (this.props.bookingRecord) {
      return this.renderBookingRequest()
    }
    if (this.props.mapRegion == null) {
      return this.renderLoading()
    }
    return this.renderHome()
  }
}

Home.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  setPickupLocation: PropTypes.func.isRequired,
  setDropLocation: PropTypes.func.isRequired,
  bookTaxi: PropTypes.func.isRequired,
  cancelBookingTaxi: PropTypes.func.isRequired,
  pickupLocation: PropTypes.object,
  dropoffLocation: PropTypes.object,
  mapRegion: PropTypes.object,
  bookingRecord: PropTypes.object,
  drivers: PropTypes.array,
  taxiType: PropTypes.object
}
