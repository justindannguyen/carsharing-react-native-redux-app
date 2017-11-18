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
import {
  SET_PICK_UP_LOCATION,
  SET_DROP_OFF_LOCATION,
  SET_FARE_STRUCTURE,
  BOOK_TAXI_REQUEST
} from "./HomeActions"
import { getRegionFromCoordinates, taxiTypes } from "../../../global"

export const actionHandlers = {
  SET_PICK_UP_LOCATION: handleSetPickupLocation,
  SET_DROP_OFF_LOCATION: handleSetDropLocation,
  SET_FARE_STRUCTURE: handleSetFareStructure,
  BOOK_TAXI_REQUEST: handleBookTaxiRequest
}

function handleSetPickupLocation(state, action) {
  const pickupLocation = action.payload
  const dropoffLocation = state.dropoffLocation

  // As we will not integrate with any server so ,
  // just random some drivers when users set pickup
  const randomDriverCount = Math.round(Math.random() * 20)
  const drivers = []
  for (let i = 0; i < randomDriverCount; i++) {
    const randomTaxiType = Math.round(Math.random() * 1000) % taxiTypes.length
    drivers.push({
      id: i,
      taxiType: taxiTypes[randomTaxiType].type,
      latitude: pickupLocation.latitude + (Math.random() - Math.random()) / 50,
      longitude: pickupLocation.longitude + (Math.random() - Math.random()) / 50
    })
  }

  return update(state, {
    pickupLocation: {
      $set: pickupLocation
    },
    mapRegion: {
      $set: getRegionFromCoordinates([pickupLocation, dropoffLocation])
    },
    drivers: {
      $set: drivers
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

function handleSetFareStructure(state, action) {
  return update(state, {
    fareStructure: {
      $set: action.payload
    }
  })
}

function handleBookTaxiRequest(state, action) {
  return update(state, {
    bookingRecord: {
      $set: action.payload
    }
  })
}
