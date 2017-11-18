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
import { Button, Label } from "native-base"
import { PropTypes } from "prop-types"
import styles from "./styles"

export default class Booking extends Component {
  onButtonPress = () => {
    this.props.bookTaxi()
  }

  render() {
    const style = { ...styles.container }
    if (this.props.bookingDisabled) {
      style.backgroundColor = styles.disabledState.backgroundColor
    }
    return (
      <Button style={style} disabled={this.props.bookingDisabled} onPress={this.onButtonPress}>
        <Label style={styles.text}>Book</Label>
      </Button>
    )
  }
}

Booking.propTypes = {
  bookTaxi: PropTypes.func.isRequired,
  bookingDisabled: PropTypes.bool.isRequired
}
