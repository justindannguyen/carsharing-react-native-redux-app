export const GET_USER_CURRENT_LOCATION = 'GET_USER_CURRENT_LOCATION'
export const SET_PICK_UP_LOCATION = 'SET_PICK_UP_LOCATION'
export const SET_DROP_OFF_LOCATION = 'SET_DROP_OFF_LOCATION'

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

export function getCurrentLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(setCurrentLocationAction(position)),
      error => console.log(error.message),
      { timeout: 20000, enableHighAccuracy: false, maximumAge: 1000 }
    )
  }
}
