import React from 'react'
import Movie from '../MovieListItem'
import style from './MovieList.module.css'

const MovieList = ({ movies }) => (
  <div className={style.container}>
    {movies && movies.length !== 0 ? (
      movies.map((m, i) => (
        <Movie
          key={i}
          data={m}
        />
      ))
    ) : (
      <span>А фильмов-то нет таких</span>
    )}
  </div>
)

export default MovieList
