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

const mapKey = "AIzaSyADle97bAymuZSIpAP_BlyC_IpDb6g6F_0"
export const urls = {
  distanceMatrix: (originLat, originLong, desLat, desLong) =>
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`,
  mapDirection: (originLat, originLong, desLat, desLong) =>
    `https://maps.googleapis.com/maps/api/directions/json?origins=${originLat},${originLong}&destinations=${desLat},${desLong}&key=${mapKey}`
}
