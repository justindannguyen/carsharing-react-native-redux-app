/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 * 
 * @author tuan3.nguyen@gmail.com
 * 
 * @flow
 * @format
 */
'use strict'

import update from 'immutability-helper'
import { Dimensions } from 'react-native'
import {
  GET_USER_CURRENT_LOCATION,
  SET_PICK_UP_LOCATION,
  SET_DROP_OFF_LOCATION
} from './HomeActions'

export const actionHandlers = {
  GET_USER_CURRENT_LOCATION: handleSetCurrentLocation,
  SET_PICK_UP_LOCATION: handleSetPickupLocation,
  SET_DROP_OFF_LOCATION: handleSetDropLocation
}

function handleSetPickupLocation(state, action) {
  return update(state, {
    pickupLocation: {
      $set: action.payload
    }
  })
}

function handleSetDropLocation(state, action) {
  return update(state, {
    dropoffLocation: {
      $set: action.payload
    }
  })
}

function handleSetCurrentLocation(state, action) {
  const position = action.payload
  if (position == null) return state

  const { width, height } = Dimensions.get('window')
  const ratio = width / height
  const latitudeDelta = 0.0922
  const longitudeDelta = latitudeDelta * ratio
  return update(state, {
    region: {
      $set: {
        latitudeDelta,
        longitudeDelta,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }
    }
  })
}
