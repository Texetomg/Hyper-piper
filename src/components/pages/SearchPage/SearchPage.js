import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchFilms } from '../../../redux/actions'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import Pagination from '../../global/Pagination'
import Preloader from '../../global/Preloader'
import * as API from '../../../constans'

const SearchPage = () => {
  const [preloader, setPreloader] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [totalResults, setTotalResults] = useState(0)
  const filmsStore = useSelector(state => state.films)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm !== '') {
      setPreloader(1)
      fetch(`${API.SEARCH_ALL}?api_key=${API.KEY}&query=${searchTerm}`)
      .then(data => data.json())
      .then(data => {
        dispatch(searchFilms([...data.results]))
        setTotalResults(data.total_results)
        setPreloader(0)
      })
      .catch(error => {
        setPreloader(0)
      })
    }  
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const nextPage = (pageNumber) => {
    setPreloader(1)
    fetch(`${API.SEARCH_ALL}?api_key=${API.KEY}&query=${searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        searchFilms([...data.results])
        setTotalResults(data.total_results)
        setPreloader(0)
      })
      .catch(error => {
        setPreloader(0)
      })
  }

  return (
    <div>
      <Preloader active={preloader}/>
      <SearchArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <MovieList
        movies={filmsStore.searchedFilms}
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
