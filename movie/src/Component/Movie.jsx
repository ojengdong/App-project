import React from 'react'
import PropTyps from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({id, coverImg, title, summary, genres}) => {
  return (
    <div>
        <img src={coverImg} alt="movie img" />
        <h2>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((e) => 
            (<li key={e}>{e}</li>)
            )}
        </ul>
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