import React from 'react'
import { AppRegistry } from 'react-native'
import Application from './AppWithStoreProvider'

export default function run() {
  AppRegistry.registerComponent('RNTestTask', () => () => {
    return <Application />
  })
}
