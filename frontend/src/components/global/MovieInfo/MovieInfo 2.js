import React from 'react'
import defaultPoster from '../../../assets/imgs/default_movie.png'
import * as API from '../../../constans'
import styles from './MovieInfo.module.css'

const MovieInfo = ({ errorStatus, popcornData, moviedbData, moviedbTrailer }) => {
  const sendMagnet = (quality) => {
    fetch('/get_movie', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: popcornData.imdb_id,
        url: popcornData.torrents.en[quality].url,
        quality: quality
      })
    })
  }

  return (
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
        <div>{errorStatus || popcornData.length === 0 ? (
          'нет данных по торренту' ) : ( 
            <div>
              {popcornData.torrents.en['720p'] ? (
                <button onClick={() => sendMagnet('720p')}>720</button>
              ) : null}
              {popcornData.torrents.en['1080p'] ? (
                <button onClick={() => sendMagnet('1080p')}>1080</button>
              ) : null}
            </div>
          )}</div>
          <iframe title='kek' src={moviedbData === '' ? '' : (
            `https://www.youtube.com/embed/${moviedbTrailer[0]?.id}`
          )}></iframe>
      </div>
    </div>
  )
}

export default MovieInfo
