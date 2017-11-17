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

import { showWarning } from "../../../global"

export const SET_PICK_UP_LOCATION = "SET_PICK_UP_LOCATION"
export const SET_DROP_OFF_LOCATION = "SET_DROP_OFF_LOCATION"

export function setPickupLocationAction(location) {
  return {
    type: SET_PICK_UP_LOCATION,
    payload: location
  }
}

export function setDropLocationAction(location) {
  return {
    type: SET_DROP_OFF_LOCATION,
    payload: location
  }
}

export function getCurrentLocation() {
  // Fallback coords at eTown2, Cong Hoa street.
  const fallbackCoords = { latitude: 10.8018791, longitude: 106.6391644 }
  const geoOptions = { timeout: 20000, enableHighAccuracy: false, maximumAge: 1000 }
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(setPickupLocationAction(position.coords)),
      error => dispatch(setPickupLocationAction(fallbackCoords)),
      geoOptions
    )
  }
}
