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

export const urls = {
  mapDirection: (originLat, originLong, desLat, desLong) =>
    `https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLong}&destination=${desLat},${desLong}&key=AIzaSyADle97bAymuZSIpAP_BlyC_IpDb6g6F_0`
}
