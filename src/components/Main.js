import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import MovieInfoPage from './pages/MovieInfoPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import GreetingPage from './pages/GreetingPage'
import CallbackPage from './pages/CallbackPage'
import PrivateRoute from '../components/global/PrivateRoute'

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/callback' component={CallbackPage}/>
        <Route exact path='/' component={GreetingPage}/>
        <Route path='/search' component={SearchPage}/>
        <Route path='/movie' component={MovieInfoPage}/>
        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default Main
