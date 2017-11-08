import update from 'immutability-helper'
import constants from './ActionConstants'

const { SET_NAME } = constants

const actionHandlers = {
  SET_NAME : handleSetName
}
const initialState = {}

export function setName() {
  return {
    type : SET_NAME,
    payload : 'Developer'
  }
}

function handleSetName(state, action) {
  return update(state, {
    name : {
      $set : action.payload
    }
  })
}

export function homeReducer(state = initialState, action) {
  const handle = actionHandlers[action.type]
  return handle ? handle(state, action) : state
}