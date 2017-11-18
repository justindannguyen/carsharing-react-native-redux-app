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

import { StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get("window")
const styles = {
  findDriverContainer: {
    flex: 1,
    backgroundColor: "#FF5E3A",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 25,
    marginTop: 15
  },
  locationIcon: {
    color: "#fff",
    fontSize: 40
  },
  contentTop: {
    flex: 3,
    alignItems: "center"
  },
  contentBottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  pickupText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5
  },
  spinner: {
    marginBottom: 10,
    marginTop: 10
  },
  toArrow: {
    color: "#fff",
    fontSize: 16
  },
  cancelBtnWrapper: {
    marginTop: 15,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelBtn: {
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "transparent",
    marginBottom: 10
  },
  cancelBtnText: {
    color: "#fff"
  },
  termsText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 15
  }
}

export default styles
