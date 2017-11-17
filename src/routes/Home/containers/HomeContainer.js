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

import { connect } from "react-redux"
import Home from "../components/Home"
import { getCurrentLocation, setPickupLocation, setDropLocation } from "../modules/HomeActions"

const mapStateToProps = ({ home }) => ({
  mapRegion: home.mapRegion,
  pickupLocation: home.pickupLocation,
  dropoffLocation: home.dropoffLocation
})

const mapDispatchToProps = {
  getCurrentLocation,
  setPickupLocation,
  setDropLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
