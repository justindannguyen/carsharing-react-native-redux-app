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

import React, { Component } from "react"
import { PropTypes } from "prop-types"
import { Text } from "react-native"
import { Footer, FooterTab, Button } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const styles = {
  footerContainer: {
    backgroundColor: "#fff"
  },
  type: {
    fontSize: 12
  },
  title: {
    fontSize: 6
  }
}
//tab bar items
const taxiTypes = [
  {
    type: "TaxiCar",
    title: "4 wheelers",
    icon: "car"
  },
  {
    type: "TaxiShare",
    title: "7 wheelers",
    icon: "car-estate"
  },
  {
    type: "Premium",
    title: "BMW, Mec, etc",
    icon: "car-sports"
  },
  {
    type: "TaxiBike",
    title: "2 wheelers",
    icon: "motorbike"
  }
]
export default class AppFooter extends Component {
  onTaxiTypeSelected = taxiType => {
    if (taxiType !== this.props.selectedTaxiType) {
      this.props.setSelectedTaxiType(taxiType)
    }
  }

  formatTabElement(tabInfo, style = {}) {
    // Clone the styles so that customization will not impacted to template
    const elementStyle = { ...style }
    const tabIsActive = this.props.selectedTaxiType === tabInfo.type
    elementStyle.color = tabIsActive ? "#FF5E3A" : "grey"

    return elementStyle
  }

  renderTab(tabInfo) {
    // FIXME using anonymous function is not the good practices,
    // are there anyway to pass arguments via onPress event?
    return (
      <Button vertical key={tabInfo.type} onPress={() => this.onTaxiTypeSelected(tabInfo.type)}>
        <Icon size={25} name={tabInfo.icon} style={this.formatTabElement(tabInfo)} />
        <Text style={this.formatTabElement(tabInfo, styles.type)}>{tabInfo.type}</Text>
        <Text style={this.formatTabElement(tabInfo, styles.title)}>{tabInfo.title}</Text>
      </Button>
    )
  }

  render() {
    return (
      <Footer>
        <FooterTab style={styles.footerContainer}>
          {taxiTypes.map(type => this.renderTab(type))}
        </FooterTab>
      </Footer>
    )
  }
}

AppFooter.propTypes = {
  setSelectedTaxiType: PropTypes.func.isRequired,
  selectedTaxiType: PropTypes.string.isRequired
}
