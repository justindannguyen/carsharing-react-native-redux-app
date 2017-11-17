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
import { PropTypes } from "prop-types"
import { Content } from "native-base"
import MapView from "react-native-maps"
import styles from "./styles"
import { SearchBox } from "../SearchBox"

export default class MapContainer extends Component {
  render() {
    const {
      currentLocation,
      setPickupLocation,
      pickupLocation,
      setDropLocation,
      dropoffLocation
    } = this.props
    return (
      <Content contentContainerStyle={styles.container}>
        <MapView provider={MapView.PROVIDER_GOOGLE} region={currentLocation} style={styles.map}>
          {pickupLocation ? <MapView.Marker coordinate={pickupLocation} pinColor="green" /> : null}
          {dropoffLocation ? (
            <MapView.Marker coordinate={dropoffLocation} pinColor="orangered" />
          ) : null}
        </MapView>
        <SearchBox
          setPickupLocation={setPickupLocation}
          pickupLocation={pickupLocation}
          setDropLocation={setDropLocation}
          dropoffLocation={dropoffLocation}
        />
      </Content>
    )
  }
}

MapContainer.propTypes = {
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
  currentLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  })
}
