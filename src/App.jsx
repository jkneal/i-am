import React from 'react'
import Reflux from 'reflux'
import {Route, Switch} from 'react-router-dom'

import appStore from './app-store'

import Home from './Home'

import "video-react/dist/video-react.css"
import './app.css'

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>    
  </div>
)
