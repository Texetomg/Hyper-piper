import React, { useState, useEffect } from 'react'
import defaultPoster from '../imgs/defaultPoster.png'

const posterSrc = `http://image.tmdb.org/t/p/w185`

const MovieInfo = ({ closeMovie, data }) => {
  const [ popcornData, setPopCornData] = useState('');

  useEffect((popcornData) => {
    fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
    .then(data => data.json())
    .then(data => setPopCornData(data))
  }, [data])


  // вся инфа сохраняется в popcornData при загрузке страницы
  // добавь тут торрент плеер
  return (
    <div className="container">
    <div className="row" onClick={closeMovie} style={{cursor: "pointer", paddingTop: 50}}>
      <span style={{marginLeft: 10}}>go back</span>
    </div>
    <div className="row">
      <div className="col s12 m4">
        <img
          src={data.poster_path === null ? defaultPoster : `${posterSrc}${data.poster_path}`}
          alt='movie poster'
          // исправить в стили
          style={{width: "auto", height: 360}}
        />
      </div>
      <div className="col s12 m8">
      <div className="info-container">
        <p>{data.title}</p>
        <p>{data.release_date}</p>
        <p>{data.overview}</p>
      </div>
    </div>
    </div> 
  </div>
  )
}

export default MovieInfo