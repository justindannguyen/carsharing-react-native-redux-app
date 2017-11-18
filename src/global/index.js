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

import { Toast } from "native-base"

//tab bar items
export const taxiTypes = [
  {
    type: "TaxiCar",
    title: "4 wheelers",
    icon: "car",
    pricePerKm: 0.1, // $0.1 per km
    standardDurationPerKm: 12 // 0.5 minute per km
  },
  {
    type: "TaxiShare",
    title: "7 wheelers",
    icon: "car-estate",
    pricePerKm: 0.07,
    standardDurationPerKm: 14
  },
  {
    type: "Premium",
    title: "BMW, Mec, etc",
    icon: "car-sports",
    pricePerKm: 0.2,
    standardDurationPerKm: 12
  },
  {
    type: "TaxiBike",
    title: "2 wheelers",
    icon: "motorbike",
    pricePerKm: 0.04,
    standardDurationPerKm: 12
  }
]

function showToast(configs = {}) {
  configs.duration = 3
  configs.buttonText = "Got it!"
  Toast.show(configs)
}

/**
 * Show a success toast from given message.
 * 
 * @param {string} message 
 */
export function showSuccess(message) {
  showToast({ type: "success" })
}

/**
 * Show a warning toast from given message.
 * 
 * @param {string} message 
 */
export function showWarning(message) {
  showToast({ type: "warning", text: message })
}

/**
 * Show a danger toast from given message.
 * 
 * @param {string} message 
 */
export function showError(message) {
  showToast({ type: "danger" })
}

/**
 * Compare if 2 map location is equals.
 * 
 * @param {*} mapLocation1 
 * @param {*} mapLocation2 
 */
export function isLocationEquals(mapLocation1, mapLocation2) {
  if (mapLocation1 == mapLocation2) {
    return true
  }
  if (mapLocation1 == null || mapLocation2 == null) {
    return false
  }
  return (
    mapLocation1.latitude == mapLocation2.latitude &&
    mapLocation1.longitude == mapLocation2.longitude
  )
}

export function isFareStructureEquals(fare1, fare2) {
  if (fare1 == fare2) {
    return true
  }
  if (fare1 == null || fare2 == null) {
    return false
  }
  return (
    fare1.distance.value == fare2.distance.value && fare1.duration.value == fare2.duration.value
  )
}

export function getRegionFromCoordinates(points) {
  let minLat, maxLat, minLng, maxLng

  points.filter(point => point != null).forEach(point => {
    const lat = point.latitude
    const lng = point.longitude
    minLat = Math.min(minLat || lat, lat)
    maxLat = Math.max(maxLat || lat, lat)
    minLng = Math.min(minLng || lng, lng)
    maxLng = Math.max(maxLng || lng, lng)
  })

  const middleLat = (minLat + maxLat) / 2
  const middleLong = (minLng + maxLng) / 2
  const deltaLat = maxLat - minLat
  const deltaLong = maxLng - minLng

  return {
    latitude: middleLat,
    longitude: middleLong,
    latitudeDelta: Math.max(0.04, deltaLat * 1.35),
    longitudeDelta: Math.max(0.02, deltaLong * 1.35)
  }
}
