import React from 'react'
import style from './Preloader.module.css'

const Preloader = ({ active }) => (
  active ? (
    <div className={style.preloader}> Loading...</div>
  ) : (
    <div className={style.preloader}> {' '} </div>
  )
)

export default Preloader
