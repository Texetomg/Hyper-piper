import React, { useState, useEffect } from 'react'
import Preloader from '../../global/Preloader'
import defaultPoster from '../imgs/defaultPoster.png'
import * as API from '../../../constans'

const MovieInfoPage = () => {
  const [ popcornData, setPopCornData] = useState('');
  const [ preloader, setPreloader ] = useState(1)

  useEffect(() => {
    fetch(`${API.SEARCH_MOVIE}/${localStorage.getItem('currentFilm')}?api_key=${API.KEY}`)
    .then(data => data.json())
    .then(data => (
      fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data.torrents.en['1080p'].url)
        setPopCornData(data)
        setPreloader(0)
      })
    ))
  }, [])

  return (
    preloader ? (<Preloader active={preloader}/>) : (
      <div className="container">
      <div className="row" >
      </div>
      <div className="row">
        <div className="col s12 m4">
          <img
            src={!popcornData.images.poster ? defaultPoster : `${popcornData.images.poster}`}
            alt='movie poster'
            // исправить в стили
            style={{width: "auto", height: 360}}
          />
        </div>
        <div className="col s12 m8">
        <div className="info-container">
          <p>{popcornData.title}</p>
          <p>{popcornData.release_date}</p>
          <p>{popcornData.overview}</p>
        </div>
      </div>
      </div> 
    </div>
    ) 
  )
}

export default MovieInfoPage