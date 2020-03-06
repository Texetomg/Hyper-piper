import React from 'react'
import Movie from '../MovieListItem'
import style from './MovieList.module.css'

const MovieList = ({movies}) => (
  <div className={style.container}>
    {movies.map((m, i) => (
      <Movie
        key={i}
        data={m}
      />
    ))}
  </div>
)

export default MovieList
