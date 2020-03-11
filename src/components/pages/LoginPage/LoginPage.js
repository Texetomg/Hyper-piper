import React from 'react'
import { withAuth } from '../../global/Auth'
import { Redirect } from 'react-router-dom'
import style from './LoginPage.module.css'

const LoginPage = withAuth(({ isAutorized, autorize }) => {
  console.log(isAutorized) 
  return (
    isAutorized ? <Redirect to='/' /> : (
      <div className={style.container}>
        <div className={style.form}>
          <h1>Вы не авторизованы</h1>
          <div
            onClick={() => autorize()}
            className={style.button}
          > 
            Авторизоваться
          </div>
        </div>
      </div>
    )
  )
})
  

export default LoginPage
