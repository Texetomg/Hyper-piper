import React from 'react'
import { Link } from 'react-router-dom'
import defaultPoster from '../../../assets/imgs/default_movie.png'
import { POSTER_SRC } from '../../../constans'
import style from './MovieListItem.module.css'

const Movie = ({ data }) => {
  return (
<Link to={{ pathname: "/movie" }}>
    <div
      className={style.item}
      onClick={() => {
        localStorage.setItem('currentFilm', `${data.id}`)
      }}
     
    >
      <img
        src={data.poster_path === null ? (
          defaultPoster
        ) : (
          `${POSTER_SRC}${data.poster_path}`
        )}
        alt='movie poster'
      />
      <div className={style.itemDescription}>
        <div className={style.itemScore}>
          <div>{data.vote_average}</div>
          <div>{data.release_date.split('-')[0]}</div>
        </div>
        <div className={style.title}>{data.title}</div>
      </div>
    </div>
  </Link>
  )
}
  


export default Movie
