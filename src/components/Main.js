import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import MovieInfoPage from './pages/MovieInfoPage'

const Main = () => {

 
  return (
    <div className='main'>
      <Switch>
        <Route path='/search' component={SearchPage}/>
        <Route path='/movie' component={MovieInfoPage}/>
      </Switch>
    </div>
  )
}

export default Main