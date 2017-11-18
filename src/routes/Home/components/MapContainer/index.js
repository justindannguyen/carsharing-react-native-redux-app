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
import { isLocationEquals, taxiTypes } from "../../../../global"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount = () => {
    // Resolve taxi icon as image for custom marker
    taxiTypes.forEach(type => {
      Icon.getImageSource(type.icon, 25, "orangered").then(image =>
        this.setState({ ...this.state, [type.type]: image })
      )
    })
  }

  renderPickupMarker() {
    const { pickupLocation } = this.props
    if (pickupLocation == null) {
      return null
    }
    return <MapView.Marker coordinate={pickupLocation} pinColor="green" />
  }

  renderDropoffMarker() {
    const { dropoffLocation } = this.props
    if (dropoffLocation == null) {
      return null
    }
    return <MapView.Marker coordinate={dropoffLocation} pinColor="orangered" />
  }

  renderDriverMarkers() {
    const { taxiType } = this.props
    if (taxiType == null || this.state[taxiType.type] == null) {
      return null
    }
    return this.props.drivers
      .filter(driver => driver.taxiType === taxiType.type)
      .map(driver => (
        <MapView.Marker key={driver.id} coordinate={driver} image={this.state[taxiType.type]} />
      ))
  }

  render() {
    const { pickupLocation, dropoffLocation, taxiType } = this.props
    const bookingDisabled =
      pickupLocation == null ||
      dropoffLocation == null ||
      isLocationEquals(pickupLocation, dropoffLocation)
    return (
      <Content contentContainerStyle={styles.container}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          region={this.props.mapRegion}
          style={styles.map}>
          {this.renderPickupMarker()}
          {this.renderDropoffMarker()}
          {this.renderDriverMarkers()}
        </MapView>
        <SearchBox
          setPickupLocation={this.props.setPickupLocation}
          pickupLocation={pickupLocation}
          setDropLocation={this.props.setDropLocation}
          dropoffLocation={dropoffLocation}
        />
        <Booking bookingDisabled={bookingDisabled} bookTaxi={this.props.bookTaxi} />
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
  }),
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      taxiType: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  ),
  taxiType: PropTypes.shape({
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })
}

MapContainer.defaultProps = {
  drivers: []
}
