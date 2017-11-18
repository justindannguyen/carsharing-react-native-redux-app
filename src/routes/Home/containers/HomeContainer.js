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

const mapStateToProps = state => ({
  mapRegion: state.home.mapRegion,
  pickupLocation: state.home.pickupLocation,
  dropoffLocation: state.home.dropoffLocation,
  bookingRecord: state.home.bookingRecord,
  drivers: state.home.drivers,
  taxiType: state.template.selectedTaxiType
})

const mapDispatchToProps = {
  getCurrentLocation,
  setPickupLocation,
  setDropLocation,
  bookTaxi,
  cancelBookingTaxi
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
