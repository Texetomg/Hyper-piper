import React, { useState } from 'react'
import './App.css'
import Nav from './Navbar'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Pagination from './Pagination'
import Footer from './Footer'
import Preloader from './Preloader'
import MovieInfo from './MovieInfo'

const API_KEY = '3cd812278264538c732dd03e786ad4c7'
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [totalResults, setTotalResults] = useState(0)
  const [currentMovie, setCurrentMovie] = useState(null)
  const [preloader, setPreloader] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm !== '') {
      setPreloader(1)
      fetch(`${API_URL}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        setMovies([...data.results])
        setTotalResults(data.total_results)
        setPreloader(0)
      })
    }  
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const nextPage = (pageNumber) => {
    setPreloader(1)
    fetch(`${API_URL}&query=${searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        setMovies([...data.results])
        setTotalResults(data.total_results)
        setPreloader(0)
      })
  }

  const viewMovie = (id) => {
    const filteredMovie = movies.filter(m => m.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    setCurrentMovie(newCurrentMovie)
  }

  const closeMovie = (id) => {
    setCurrentMovie(null)
  }

  return (
    <div className='App'>
      <Nav/>
      <div className='main'>
        <Preloader active={preloader}/>
        <SearchArea
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {currentMovie ? (
          <MovieInfo closeMovie={closeMovie} data={currentMovie}/>
        ) : (
          <React.Fragment>
            <MovieList movies={movies} viewMovie={viewMovie}/>
            <Pagination
              totalResults={totalResults}
              pages={Math.floor(totalResults / 20)}
              nextPage={nextPage}
            />
          </React.Fragment>
        )}  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
