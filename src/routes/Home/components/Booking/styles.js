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
const styles = {
  container: {
    borderColor: "#fff",
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    backgroundColor: "#FF5E3A"
  },
  disabledState: {
    backgroundColor: "#D7D7D7"
  },
  activeState: {
    backgroundColor: "#FF5E3A"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },
  amount: {
    fontWeight: "bold",
    fontSize: 12
  }
}

export default styles
