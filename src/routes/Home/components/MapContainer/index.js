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

import React from "react"
import { Container, Content } from "native-base"
import MapView from "react-native-maps"
import styles from "./styles"
import { SearchBox } from "../SearchBox"

export const MapContainer = props => {
  const { region, setPickupLocation, pickupLocation, setDropLocation, dropoffLocation } = props
  return (
    <Content contentContainerStyle={styles.container}>
      <MapView provider={MapView.PROVIDER_GOOGLE} region={region} style={styles.map}>
        <MapView.Marker coordinate={region} pinColor="orangered" />
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

export default MapContainer
