import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchPage from './pages/SearchPage/SearchPage'
import MovieInfoPage from './pages/MovieInfoPage/MovieInfoPage'
import NotFoundPage from './pages/NotFoundPage'

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/search' component={SearchPage}/>
        <Route path='/movie'><MovieInfoPage/></Route>
        <Route path='/*' component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default Main
