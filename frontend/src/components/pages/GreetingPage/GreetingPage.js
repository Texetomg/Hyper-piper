import React from 'react'
import { Link } from 'react-router-dom'
import style from './GreetingPage.module.css'

const GreetingPage = () => (
  <div className={style.container}>
    <Link to={{
      pathname: "/search",
    }}>
      <div className={style.element}>
        кино
      </div>
    </Link>
    <Link to={{
      pathname: "/search",
    }}>
      <div className={style.element}>
        кино
      </div>
    </Link>
    <Link to={{
      pathname: "/search",
    }}>
      <div className={style.element}>
        кино
      </div>
    </Link>
  </div>
)

export default GreetingPage
