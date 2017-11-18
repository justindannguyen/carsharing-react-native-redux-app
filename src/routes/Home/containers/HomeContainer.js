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
  setPickupLocation,
  setDropLocation,
  bookTaxi,
  cancelBookingTaxi
} from "../modules/HomeActions"

const mapStateToProps = ({ home }) => ({
  mapRegion: home.mapRegion,
  pickupLocation: home.pickupLocation,
  dropoffLocation: home.dropoffLocation,
  bookingRecord: home.bookingRecord
})

const mapDispatchToProps = {
  getCurrentLocation,
  setPickupLocation,
  setDropLocation,
  bookTaxi,
  cancelBookingTaxi
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
