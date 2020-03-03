import React from 'react'
import { Link } from 'react-router-dom'
import defaultPoster from '../imgs/defaultPoster.png'
import { POSTER_SRC } from '../../../constans'

const Movie = ({ data }) => {
  
  return (
    <Link to={{
      pathname: "/movie",
    }}>
      <div id={data.id} className='col s12 m6 l4'>
        <div className='card' onClick={() => {
          localStorage.setItem('currentFilm', `${data.id}`)
        }}>
          <div className='card-image waves-effect waves-block waves-light'>
            <img
              src={data.poster_path === null ? (
                defaultPoster
              ) : (
                `${POSTER_SRC}${data.poster_path}`
              )}
              alt='movie poster'
              // исправить в стили
              style={{width: "auto", height: 360}}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Movie
