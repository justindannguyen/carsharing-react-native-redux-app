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
import { View, Image, Text } from "react-native"
import Spinner from "react-native-spinkit"
import styles from "./styles"

const appLogo = require("../../../../assets/images/taxi_logo_white.png")
const standardMessage = "Getting your location"
const longLoadingMessage = "We still working on it"
const messagePostfixes = ["", ".", "..", "..."]
export default class LoadingIndicator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingCount: 0
    }
  }
  componentWillMount() {
    this.timerId = setInterval(() => {
      let { loadingCount } = this.state
      this.setState({ ...this.state, loadingCount: ++loadingCount })
    }, 700)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const postFixIndex = this.state.loadingCount % messagePostfixes.length
    const messagePostfix = messagePostfixes[postFixIndex]
    const loadingTakesLonger = this.state.loadingCount >= 10
    const message = loadingTakesLonger ? longLoadingMessage : standardMessage
    return (
      <View style={styles.container}>
        <Image source={appLogo} />
        <Spinner
          style={styles.spinner}
          isVisible
          size={150}
          type="WanderingCubes"
          color="#FFFFFF"
        />
        <Text style={styles.text}>{message + messagePostfix}</Text>
      </View>
    )
  }
}

LoadingIndicator.propTypes = {}
