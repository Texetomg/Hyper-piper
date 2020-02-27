import React, { useState, useEffect } from 'react'
import Preloader from '../../global/Preloader'
import { useSelector } from 'react-redux'
import defaultPoster from '../imgs/defaultPoster.png'
import WebTorrent from 'webtorrent'
import VideoPlayerContainer from './VideoPlayerContainer'
import * as API from '../../../constans'

const MovieInfoPage = () => {
  const [ popcornData, setPopCornData] = useState('');
  const [ preloader, setPreloader ] = useState(1)

  const currentFilm = useSelector(state => state.films.currentFilm)


  useEffect(() => {
    fetch(`${API.SEARCH_MOVIE}/${currentFilm}?api_key=${API.KEY}`)
    .then(data => data.json())
    .then(data => (
      fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
      .then(data => data.json())
      .then(data => {
        setPopCornData(data)
        setPreloader(0)
      })
    ))
   
  }, [currentFilm])

  useEffect(() => {
    const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
  }, [])

  
 
  return (
    preloader ? (<Preloader active={preloader}/>) : (
      <div className="container">
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
        <div className="pleer-container">
          <VideoPlayerContainer data={popcornData}/>
        </div>
      </div>
      </div> 
    </div>
    ) 
  )
}

export default MovieInfoPage