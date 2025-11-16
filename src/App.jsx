import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import AppLayout from './components/layout/AppLayout'

export default function App(){
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={AppLayout} />
    </Switch>
  )
}
