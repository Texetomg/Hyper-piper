import React, { useState } from 'react'
import SearchArea from '../SearchArea'
import MovieList from '../MovieList'
import Pagination from '../Pagination'
import Preloader from '../Preloader'

const API_KEY = '3cd812278264538c732dd03e786ad4c7'
const API_SEARCH = `https://api.themoviedb.org/3/search/movie`
const API_MOVIE = `https://api.themoviedb.org/3/movie`

const SearchPage = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [currentMovie, setCurrentMovie] = useState(null)
  const [preloader, setPreloader] = useState(0)
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [totalResults, setTotalResults] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm !== '') {
      setPreloader(1)
      fetch(`${API_SEARCH}?api_key=${API_KEY}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setMovies([...data.results])
        setTotalResults(data.total_results)
        setPreloader(0)
      })
      .catch(error => {
        setErrorStatus(error)
        setPreloader(0)
      })
    }  
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const nextPage = (pageNumber) => {
    setPreloader(1)
    fetch(`${API_SEARCH}&query=${searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        setMovies([...data.results])
        setTotalResults(data.total_results)
        setPreloader(0)
      })
      .catch(error => {
        setErrorStatus(error)
        setPreloader(0)
      })
  }

  const viewMovie = (id) => {
  // если нужен трейлер добавить к урлу "&append_to_response=videos"
    fetch(`${API_MOVIE}/${id}?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(data => setCurrentMovie(data))
  }

  const closeMovie = (id) => {
    setCurrentMovie(null)
  }

  return (
    <div>
      <Preloader active={preloader}/>
      <SearchArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <MovieList
        movies={movies}
        viewMovie={viewMovie}
      />
      <Pagination
        totalResults={totalResults}
        pages={Math.floor(totalResults / 20)}
        nextPage={nextPage}
      />
    </div>
  )
}

export default SearchPage