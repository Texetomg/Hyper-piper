import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => (
  <nav>
    <div className={style.navbar}>
      <a href="./" className={style.logo}>Hyper tube</a>
    </div>
  </nav>
)

export default Navbar
