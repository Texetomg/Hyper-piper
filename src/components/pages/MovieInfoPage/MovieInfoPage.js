import React, { useState, useEffect } from 'react'
import Preloader from '../../global/Preloader'
import * as API from '../../../constans'
import MovieInfo from '../../global/MovieInfo'

const MovieInfoPage = () => {
  const [ popcornData, setPopCornData ] = useState('')
  const [ moviedbData, setMoviedbData ] = useState('')
  const [ moviedbTrailer, setMoviedbTrailer ] = useState('')
  const [ preloader, setPreloader ] = useState(1)
  const [ errorStatus, setErrorStatus ] = useState(false)

  useEffect(() => {
    fetch(`${API.SEARCH_MOVIE}/${localStorage.getItem('currentFilm')}?api_key=${API.KEY}`)
    .then(data => data.json())
    .then(data => {
      setMoviedbData(data)
      fetch(`https://tv-v2.api-fetch.website/movie/${data.imdb_id}`)
      .then(data => data.json())
      .then(data => {
        console.log(data.torrents.en['1080p'].url)
        setPopCornData(data)
        setPreloader(0)
      })
      .then(() => {
        fetch(`${API.SEARCH_MOVIE}/${localStorage.getItem('currentFilm')}/videos?api_key=${API.KEY}`)
        .then(data => data.json())
        .then(data => {
          setMoviedbTrailer(data.results)
        })
      })
      .catch(e => {
        setPreloader(0)
        setErrorStatus(true)
      })
    })
  }, [])

  return (
    preloader ? (<Preloader active={preloader}/>) : (
      <MovieInfo
        errorStatus={errorStatus}
        popcornData={popcornData}
        moviedbData={moviedbData}
        moviedbTrailer={moviedbTrailer}
      />
    ) 
  )
}

export default MovieInfoPage