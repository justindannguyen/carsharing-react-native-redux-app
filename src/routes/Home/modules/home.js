import update from 'immutability-helper'
import constants from './ActionConstants'
import { Dimensions } from 'react-native'

const { GET_USER_CURRENT_LOCATION } = constants
const ACTION_HANDLERS = {
  GET_USER_CURRENT_LOCATION: handleSetCurrentLocation
}
const initialState = {}

function setCurrentLocationAction(position) {
  return {
    type: GET_USER_CURRENT_LOCATION,
    payload: position
  }
}

export function getCurrentLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(setCurrentLocationAction(position)),
      error => console.log(error.message),
      { timeout: 20000, enableHighAccuracy: false, maximumAge: 1000 }
    )
  }
}

function handleSetCurrentLocation(state, action) {
  const position = action.payload
  if (position == null) return state

  const { width, height } = Dimensions.get("window")
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

export function homeReducer(state = initialState, action) {
  const handle = ACTION_HANDLERS[action.type]
  return handle ? handle(state, action) : state
}