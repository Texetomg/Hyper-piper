import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from './Auth'

const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuthorised, ...rest }) => (
    <Route
      {...rest}
      render={routeProps =>
        isAuthorised ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'}/>
        )
      }
    />
  )
)

export default PrivateRoute
