import React, { useState, useEffect } from 'react'
import SearchArea from '../../global/SearchArea'
import MovieList from '../../global/MovieList'
import Pagination from '../../global/Pagination'
import Preloader from '../../global/Preloader'
import FiltersPanel from '../../global/FiltersPanel'
import style from './SearchPage.module.css'
import * as API from '../../../constans'

const fetchData = (url, setPreloader, setTotalResults, setResults) => {
  setPreloader(1)
    fetch(url)
    .then(data => data.json())
    .then(data => {
      setResults(data.results)
      setTotalResults(data.total_results)
      setPreloader(0)
    })
    .catch(error => {
      setPreloader(0)
    })
}

const SearchPage = () => {
  const [preloader, setPreloader] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [totalResults, setTotalResults] = useState([])
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    const url = `${API.SEARCH_ALL}?api_key=${API.KEY}&query=${searchTerm}`

    e.preventDefault()
    
    localStorage.setItem('searchTerm', searchTerm)
    if (searchTerm !== '') {
      fetchData(url ,setPreloader, setTotalResults, setResults)
    }  
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    
  }

  useEffect(() => {
    const searchTerm = localStorage.getItem('searchTerm')
    const url = `${API.SEARCH_ALL}?api_key=${API.KEY}&query=${searchTerm}`

    if (searchTerm !== null) {
      fetchData(url ,setPreloader, setTotalResults, setResults)
    }
  }, [])

  const nextPage = (pageNumber) => {
    const searchTerm = localStorage.getItem('searchTerm')
    const url = `${API.SEARCH_ALL}?api_key=${API.KEY}&query=${searchTerm}&page=${pageNumber}`

    fetchData(url, setPreloader, setTotalResults, setResults)
  }

  return (
    <div className={style.container}>
      <Preloader active={preloader}/>
      <SearchArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <FiltersPanel />
      <MovieList
        movies={results}
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
