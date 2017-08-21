import React from 'react'
import ReactDOM from 'react-dom'

import AppContainer from './appContainer'
console.log('HEY')
const mountPoint = document.getElementById('mailGunExplorer')
console.log(mountPoint)
let entry = document.createElement('div')
let parent = mountPoint.parentElement

ReactDOM.render(
  <AppContainer originalElement={mountPoint} />,
  mountPoint
)
parent.append(entry);
