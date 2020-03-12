import React from 'react'
import defaultPoster from '../../../assets/imgs/default_movie.png'
import * as API from '../../../constans'
import styles from './MovieInfo.module.css'

const MovieInfo = ({ errorStatus, popcornData, moviedbData, moviedbTrailer }) => (
  <div className={styles.container}>
    <img
      className={styles.poster}
      src={!moviedbData.poster_path ? defaultPoster : (
        `${API.POSTER_SRC}${moviedbData.poster_path}`
      )}
      alt='movie poster'
    />
    <div className={styles.info}>
      <p>{moviedbData.original_title}</p>
      <p>{moviedbData.release_date}</p>
      <p>{moviedbData.overview}</p>
      <p>{errorStatus ? 'нет данных по торренту' : popcornData.torrents.en['1080p'].url || ''}</p>
        <iframe title='kek' src={moviedbData === '' ? '' : (
          `https://www.youtube.com/embed/${moviedbTrailer[0]?.id}`
        )}></iframe>
    </div>
  </div>
)

export default MovieInfo
