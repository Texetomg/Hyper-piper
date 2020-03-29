import React from 'react'
import { Link } from 'react-router-dom'
import defaultPoster from '../../../assets/imgs/default_movie.png'
import { POSTER_SRC } from '../../../constans'
import style from './MovieListItem.module.css'

const Movie = ({ data }) => {
  const { release_date, vote_average, poster_path, title } = data

  return (
  <Link to={{ pathname: "/movie" }}>
      <div
        className={style.item}
        onClick={() => {
          localStorage.setItem('currentFilm', `${data.id}`)
        }}
      >
        <img
          src={poster_path === null ? (
            defaultPoster
          ) : (
            `${POSTER_SRC}${poster_path}`
          )}
          alt='movie poster'
        />
        <div className={style.itemDescription}>
          <div className={style.itemScore}>
            <div>{vote_average}</div>
            <div>{release_date && release_date.split('-')[0]}</div>
          </div>
          <div className={style.title}>{title}</div>
        </div>
      </div>
    </Link>
  )
}
  


export default Movie
