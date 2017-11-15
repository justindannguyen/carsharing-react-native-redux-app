/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 * 
 * @author tuan3.nguyen@gmail.com
 * 
 * @flow
 * @format
 */
'use strict'

import React, { Component } from 'react'
import { Root } from 'native-base'
import AppRoot from './src'

export default class App extends Component {
  render() {
    return (
      <Root style={{ flex: 1 }}>
        <AppRoot {...this.props} />
      </Root>
    )
  }
}
