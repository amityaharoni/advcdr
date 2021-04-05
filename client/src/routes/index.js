import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Callers from '../components/Callers'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/callers" component={Callers} />
    </Switch>
  </div>
)

export default routes