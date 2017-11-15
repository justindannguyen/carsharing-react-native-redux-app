import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import HomeContainer from './Home/containers/HomeContainer'

export default scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={HomeContainer} title='Find your cab' initial/>
  </Scene>
)