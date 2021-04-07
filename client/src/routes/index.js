import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Callers from '../components/Callers'
import Teams from '../components/Teams'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/callers" component={Callers} />
      <Route path="/teams" component={Teams} />
    </Switch>
  </div>
)

export default routes