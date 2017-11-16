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

export const SET_SELECTED_TAXI_TYPE = "SET_SELECTED_TAXI_TYPE"

export function setSelectedTaxiTypeAction(taxiType) {
  return {
    type: SET_SELECTED_TAXI_TYPE,
    payload: taxiType
  }
}
