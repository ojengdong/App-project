import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Movie from '../Component/Movie'
import './Detail.css'
import Home from './Home'

const Detail = ({medium_cover_image,title,summary,genres,rating,year}) => {
  const [movie,setMovie] =useState([])
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
    const getMovie = async () => {
      try{
      const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json()
    setMovie(json.data.movie)
    } catch (error) {

    }
  }
  
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie)
  return (
    <div className='Detail-box'>
      <div className='Detail-img-box'>
        <img src={movie.medium_cover_image} alt="" />
      </div>
      <div className='Detail-movie-wrapper'>
        <h2 className='Detail-title'>{movie.title}</h2>
          <div>
            <p>{movie.summary}</p>
          </div>
        <ul className='Detail-genres-list'>
          <li className='Detail-genres-item'>
            {movie.genres}
          </li>
        </ul>
        <div className='rating-year'>
          <strong>{movie.rating}</strong>
          <p>{movie.year}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail