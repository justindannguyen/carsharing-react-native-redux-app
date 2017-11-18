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
import Booking from "../Booking"
import { isLocationEquals } from "../../../../global"

export default class MapContainer extends Component {
  render() {
    const {
      mapRegion,
      setPickupLocation,
      pickupLocation,
      setDropLocation,
      dropoffLocation,
      bookTaxi
    } = this.props
    const bookingDisabled =
      pickupLocation == null ||
      dropoffLocation == null ||
      isLocationEquals(pickupLocation, dropoffLocation)
    return (
      <Content contentContainerStyle={styles.container}>
        <MapView provider={MapView.PROVIDER_GOOGLE} region={mapRegion} style={styles.map}>
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
        <Booking bookingDisabled={bookingDisabled} bookTaxi={bookTaxi} />
      </Content>
    )
  }
}

MapContainer.propTypes = {
  setPickupLocation: PropTypes.func.isRequired,
  bookTaxi: PropTypes.func.isRequired,
  pickupLocation: PropTypes.object,
  setDropLocation: PropTypes.func.isRequired,
  dropoffLocation: PropTypes.object,
  mapRegion: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  })
}
