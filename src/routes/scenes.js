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

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import HomeContainer from './Home/containers/HomeContainer'

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeContainer} title="Find your cab" initial />
  </Scene>
)
