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

export const GET_USER_CURRENT_LOCATION = "GET_USER_CURRENT_LOCATION"
export const SET_PICK_UP_LOCATION = "SET_PICK_UP_LOCATION"
export const SET_DROP_OFF_LOCATION = "SET_DROP_OFF_LOCATION"

function setCurrentLocationAction(position) {
  return {
    type: GET_USER_CURRENT_LOCATION,
    payload: position
  }
}

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

/**
 * When current location is received, it also will be used as pickup location.
 * 
 * @param {any} position 
 */
function setCurrentLocation(position) {
  return dispatch => {
    dispatch(setCurrentLocationAction(position))
    dispatch(setPickupLocationAction(position))
  }
}

export function getCurrentLocation() {
  // Fallback coords at eTown2, Cong Hoa street.
  const fallbackCoords = { latitude: 10.8018791, longitude: 106.6391644 }
  const geoOptions = { timeout: 20000, enableHighAccuracy: false, maximumAge: 1000 }
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(setCurrentLocation(position.coords)),
      error => dispatch(setCurrentLocation(fallbackCoords)),
      geoOptions
    )
  }
}
