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
import { Text } from "react-native"
import { View, Input, InputGroup, Toast } from "native-base"
import styles from "./styles"
import Icon from "react-native-vector-icons/FontAwesome"
import PropTypes from "prop-types"
import RNGooglePlaces from "react-native-google-places"
import { showError } from "../../../../global"

export class SearchBox extends Component {
  choosePickupLocation = () => {
    const latLngBounds = {}
    const { pickupLocation } = this.props
    if (pickupLocation) {
      latLngBounds.latitude = pickupLocation.latitude
      latLngBounds.longitude = pickupLocation.longitude
    }
    this.pickALocation(latLngBounds, this.props.setPickupLocation)
  }

  chooseDropoffLocation = () => {
    const latLngBounds = {}
    const { dropoffLocation } = this.props
    if (dropoffLocation) {
      latLngBounds.latitude = dropoffLocation.latitude
      latLngBounds.longitude = dropoffLocation.longitude
    }
    this.pickALocation(latLngBounds, this.props.setDropLocation)
  }

  pickALocation(latLngBounds = {}, successCallback) {
    latLngBounds.radius = 0.1
    RNGooglePlaces.openPlacePickerModal(latLngBounds)
      .then(place => successCallback(place))
      .catch(error => showError(error.message))
  }

  getLocationDisplayText = location => {
    return location
      ? location.name || location.address || `${location.latitude},${location.longitude}`
      : ""
  }

  render() {
    const dropoffText = this.getLocationDisplayText(this.props.dropoffLocation)
    const pickupText = this.getLocationDisplayText(this.props.pickupLocation)
    return (
      <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
          <InputGroup>
            <Icon name="search" size={15} color="green" />
            <Input
              style={styles.inputSearch}
              placeholder="Choose pick-up location"
              value={pickupText}
              onFocus={this.choosePickupLocation}
            />
          </InputGroup>
          <InputGroup>
            <Icon name="search" size={15} color="orangered" />
            <Input
              style={styles.inputSearch}
              placeholder="Choose drop-off location"
              value={dropoffText}
              onFocus={this.chooseDropoffLocation}
            />
          </InputGroup>
        </View>
      </View>
    )
  }
}

SearchBox.propTypes = {
  setPickupLocation: PropTypes.func.isRequired,
  pickupLocation: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  setDropLocation: PropTypes.func.isRequired,
  dropoffLocation: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })
}

export default SearchBox
