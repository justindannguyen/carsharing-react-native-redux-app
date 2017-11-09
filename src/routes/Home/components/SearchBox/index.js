import React, { Component } from 'react'
import { Text } from 'react-native'
import { View, Input, InputGroup } from 'native-base'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export class SearchBox extends Component {
  render() {
    return (
      <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>PICK UP</Text>
          <InputGroup>
            <Icon name='search' size={15} color='green' />
            <Input style={styles.inputSearch} placeholder='Choose pick-up location' />
          </InputGroup>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>DROP OFF</Text>
          <InputGroup>
            <Icon name='search' size={15} color='orange' />
            <Input style={styles.inputSearch} placeholder='Choose drop-off location' />
          </InputGroup>
        </View>
      </View>
    )
  }
}

export default SearchBox
