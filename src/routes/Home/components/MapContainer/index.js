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

import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { SearchBox } from '../SearchBox'

export const MapContainer = props => {
  const { region, setPickupLocation, pickupLocation, setDropLocation, dropoffLocation } = props
  return (
    <View style={styles.container}>
      <MapView provider={MapView.PROVIDER_GOOGLE} style={styles.map} region={region}>
        <MapView.Marker coordinate={region} pinColor="green" />
      </MapView>
      <SearchBox
        setPickupLocation={setPickupLocation}
        pickupLocation={pickupLocation}
        setDropLocation={setDropLocation}
        dropoffLocation={dropoffLocation}
      />
    </View>
  )
}

export default MapContainer
