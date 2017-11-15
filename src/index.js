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
import { Provider } from 'react-redux'
import { Router } from 'react-native-router-flux'
import createStore from './store/createStore'
import { scenes } from './routes/scenes'

export default class AppRoot extends Component {
  constructor(props) {
    super(props)

    // Initial the store here so that it will not be re-created with hot reload.
    const initialState = window.__INITIAL_STATE__
    this.state = {
      store: createStore(initialState)
    }
  }

  renderApp() {
    const { store } = this.state

    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    )
  }

  render() {
    return this.renderApp()
  }
}
