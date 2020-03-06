import React from 'react'
import style from './Footer.module.css'

const Footer = () => (
  <footer >
    <div className={style.footer}>
      © {new Date().getFullYear()} bfalmer-
    </div>
  </footer>
)

export default Footer
