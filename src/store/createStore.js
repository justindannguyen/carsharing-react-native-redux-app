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

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { createLogger } from 'redux-logger'

const log = createLogger({ diff: true, collapsed: true })

// a function which can create our store and auto-persist the data
export default (initialState = {}) => {
  const middleware = [thunk, log]

  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  return store
}
