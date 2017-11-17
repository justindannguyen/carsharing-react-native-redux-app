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

import update from "immutability-helper"
import { SET_PICK_UP_LOCATION, SET_DROP_OFF_LOCATION } from "./HomeActions"
import { getRegionFromCoordinates } from "../../../global"

export const actionHandlers = {
  SET_PICK_UP_LOCATION: handleSetPickupLocation,
  SET_DROP_OFF_LOCATION: handleSetDropLocation
}

function handleSetPickupLocation(state, action) {
  const pickupLocation = action.payload
  const dropoffLocation = state.dropoffLocation
  return update(state, {
    pickupLocation: {
      $set: pickupLocation
    },
    mapRegion: {
      $set: getRegionFromCoordinates([pickupLocation, dropoffLocation])
    }
  })
}

function handleSetDropLocation(state, action) {
  const pickupLocation = state.pickupLocation
  const dropoffLocation = action.payload
  return update(state, {
    dropoffLocation: {
      $set: dropoffLocation
    },
    mapRegion: {
      $set: getRegionFromCoordinates([pickupLocation, dropoffLocation])
    }
  })
}
