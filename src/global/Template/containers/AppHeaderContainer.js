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
import AppHeader from "../components/AppHeader"

const appLogo = require("../../../assets/images/taxi_logo_white.png")

const mapStateToProps = state => ({
  logo: appLogo,
  driverOnTheWay: true,
  appStillLoading: state.home.mapRegion == null,
  bookingInProgress: state.home.bookingRecord != null
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
