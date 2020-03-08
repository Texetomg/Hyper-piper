import React from 'react'
import style from './SearchArea.module.css'

const SearchArea = ({ handleChange, handleSubmit }) => (
  <form action="" onSubmit={handleSubmit}>
    <input
      className={style.searchArea}
      placeholder="Search movie, bro"
      type="text"
      onChange={handleChange}
    />
  </form>
)

export default SearchArea
