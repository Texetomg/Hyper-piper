import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  const sortedMoviesByPopular = [...movies]
    .sort((a, b) => b.popularity - a.popularity)

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {sortedMoviesByPopular.map((m, i) => (
            <Movie
              key={i}
              data={m}
            />
          ))}
        </div>
      </div>
    </div> 
  )
}

export default MovieList