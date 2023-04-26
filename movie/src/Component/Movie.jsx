import React from 'react'
import PropTyps from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'

const Movie = ({id, coverImg, title, summary, genres}) => {
  return (
    <div className='movie-box'>
      <div>
        <img src={coverImg} alt="movie img" />
        <h2>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p className='summary'>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
        <ul className='genres-item'>
            {genres.map((e) => 
            (<li className='genres-list' key={e}>{e}</li>)
            )}
        </ul>
      </div>
    </div>
    
  )
}

Movie.PropTyps = {
    id: PropTyps.number.isRequired,
    coverImg: PropTyps.string.isRequired,
    title: PropTyps.string.isRequired,
    summary: PropTyps.string.isRequired,
    genres : PropTyps.arrayOf(PropTyps.string).isRequired
}

export default Movie