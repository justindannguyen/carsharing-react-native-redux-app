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

import { combineReducers } from 'redux'
import { homeReducer } from '../routes/Home/modules/home'

export const makeRootReducer = () => {
  return combineReducers({ home: homeReducer })
}

export default makeRootReducer
