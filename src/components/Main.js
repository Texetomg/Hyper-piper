import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SearchPage from './pages/SearchPage/SearchPage'
import MovieInfoPage from './pages/MovieInfoPage/MovieInfoPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage/LoginPage'
import GreetingPage from './pages/GreetingPage/GreetingPage'
import PrivateRoute from '../components/global/PrivateRoute'

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <PrivateRoute path='/' component={GreetingPage}/>
        <PrivateRoute path='/search' component={SearchPage}/>
        <PrivateRoute path='/movie' component={MovieInfoPage}/>
        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default Main
