import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from './Auth'

const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAutorized, ...rest }) => (
    <Route
      {...rest}
      render={routeProps =>
        isAutorized ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'}/>
        )
      }
    />
  )
)

export default PrivateRoute
