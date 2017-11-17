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
import {
  getCurrentLocation,
  setPickupLocationAction,
  setDropLocationAction
} from "../modules/HomeActions"

const mapStateToProps = ({ home }) => ({
  mapRegion: home.mapRegion,
  pickupLocation: home.pickupLocation,
  dropoffLocation: home.dropoffLocation
})

const mapDispatchToProps = {
  getCurrentLocation,
  setPickupLocation: location => setPickupLocationAction(location),
  setDropLocation: location => setDropLocationAction(location)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
