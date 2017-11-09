import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import styles from './styles'
import { SearchBox } from '../SearchBox'

export const MapContainer = ({ region }) => {
  return (
    <View style={styles.container}>
      <MapView provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        <MapView.Marker coordinate={region} pinColor='green' />
      </MapView>
      <SearchBox />
    </View>
  )
}

export default MapContainer

