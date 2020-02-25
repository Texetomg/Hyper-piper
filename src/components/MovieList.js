import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies, viewMovie }) => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        {movies.map((m, i) => (
          <Movie
            key={i}
            data={m}
            viewMovie={viewMovie}
            id={m.id}
          />
        ))}
      </div>
    </div>
  </div>
)

export default MovieList