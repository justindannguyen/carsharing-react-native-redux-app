import update from 'immutability-helper'
import constants from './ActionConstants'
import { Dimensions } from 'react-native'

const { GET_USER_CURRENT_LOCATION } = constants
const { WIDTH, HEIGHT } = Dimensions.get('window')
const RATIO = WIDTH / HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * RATIO
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
  console.log('111111111111111')
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(setCurrentLocationAction(position)),
      error => console.log(error.message),
      { timeout: 20000, enableHighAccuracy: true, maximumAge: 1000 }
    )
  }
}

function handleSetCurrentLocation(state, action) {
  const position = action.payload
  if (position == null) return

  return update(state, {
    region: {
      latitudeDelta: {
        $set: LATITUDE_DELTA
      },
      longitudeDelta: {
        $set: LONGITUDE_DELTA
      },
      longitude: {
        $set: position.coords.longitude
      },
      latitude: {
        $set: position.coords.latitude
      }
    }
  })
}

export function homeReducer(state = initialState, action) {
  const handle = ACTION_HANDLERS[action.type]
  return handle ? handle(state, action) : state
}