import { combineReducers } from "redux"
import { homeReducer } from '../routes/Home/modules/home'

export const makeRootReducer = () => {
  return combineReducers({ home : homeReducer })
}

export default makeRootReducer