import React from 'react'
import { withAuth } from '../../global/Auth'
import { Redirect } from 'react-router-dom'

const LoginPage = withAuth(({ isAuthorized, autorize }) => (
  isAuthorized ? <Redirect to='./' /> : (
    <div>autorize</div>
  )
))

export default LoginPage
