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

import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")
const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FF5E3A"
  },
  text: {
    color: "white"
  }
}

export default styles
