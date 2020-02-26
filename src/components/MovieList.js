import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies, viewMovie }) => {
  return (
  <div className="container">
    <div className="row">
      <div className="col s12">
        {movies.map((m, i) => (
          <Movie
            key={i}
            data={m}
            viewMovie={viewMovie}
          />
        ))}
      </div>
    </div>
  </div>
)}

export default MovieList