import React from 'react'
import defaultPoster from '../imgs/defaultPoster.png'

const posterSrc = `http://image.tmdb.org/t/p/w185`

const Movie = ({ data, viewMovie }) => (
  <div id={data.id} className='col s12 m6 l4'>
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img
          src={data.poster_path === null ? defaultPoster : `${posterSrc}${data.poster_path}`}
          alt='movie poster'
          // исправить в стили
          style={{width: "auto", height: 360}}
        />
        <div className="card-content">
          <a href='#/' onClick={() => viewMovie(data.id)}>View details</a>
        </div>
      </div>
    </div>
  </div>
)

export default Movie