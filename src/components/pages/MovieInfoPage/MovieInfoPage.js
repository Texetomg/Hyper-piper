import React, { useState, useEffect } from 'react'
import Preloader from '../../global/Preloader'
import defaultPoster from '../imgs/defaultPoster.png'
import WebTorrent from 'webtorrent'
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
        setPopCornData(data)
        setPreloader(0)
      })
    ))
   
  }, [])

  useEffect(() => {
    const client = new WebTorrent();

    client.on('error', err => {
      console.log('[+] Webtorrent error: ' + err.message);
    });
  }, [])

  
 
  return (
    preloader ? (<Preloader active={preloader}/>) : (
      <div className="container">
        {console.log(popcornData)}
      <div className="row" style={{cursor: "pointer", paddingTop: 50}}>
        <span style={{marginLeft: 10}}>go back</span>
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
        {/* <div className="pleer-container">
          <VideoPlayerContainer data={popcornData}/>
        </div> */}
      </div>
      </div> 
    </div>
    ) 
  )
}

export default MovieInfoPage