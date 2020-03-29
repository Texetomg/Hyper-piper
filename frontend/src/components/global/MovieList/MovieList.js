import React from 'react'
import MovieListItem from '../MovieListItem'
import style from './MovieList.module.css'

const MovieList = ({ movies }) => {
  if (!movies){
    return (<span>Начните поиск</span>)
  }
  
  if (movies && movies.length > 0) {
    return (
      <div className={style.container}>
        {movies.map((m, i) => (
          <MovieListItem
            key={i}
            data={m}
          />
        ))}
    </div>)
  }
  
  if (movies && movies.length === 0) {
    localStorage.setItem('searchTerm', '')
    return (<span>А фильмов-то нет таких</span>)
  }
}

export default MovieList
