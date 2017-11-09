import React, { Component } from 'react'
import createStore from './store/createStore'
import AppContainer from './AppContainer'

export default class Root extends Component {
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
      <AppContainer store={store} />
    )
  }

  render() {
    return this.renderApp()
  }
}
