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

import { Dimensions } from "react-native"
import { StyleSheet } from "react-native"

var width = Dimensions.get("window").width //full width
const styles = {
  searchBox: {
    ...StyleSheet.absoluteFillObject,
    width: width
  },
  inputWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: "#fff",
    opacity: 0.9,
    borderRadius: 7
  },
  inputSearch: {
    fontSize: 14
  },
  label: {
    fontSize: 10,
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0
  }
}

export default styles
