import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Movie from '../Component/Movie'
import './Detail.css'
import Home from './Home'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { House } from "@fortawesome/free-solid-svg-icons";

const Detail = ({medium_cover_image,title,summary,genres,rating,year}) => {
  const [movie,setMovie] =useState([])
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
    const getMovie = async () => {
      const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json()
    setMovie(json.data.movie)
  }
  
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie)
  return (
    <div className='Detail-box'>
      <Link to={`${process.env.PUBLIC_URL}/`}>
      <div className='back'></div>
      </Link>
      <div className='Detail-img-box'>
        <img src={movie.medium_cover_image} alt="" />
      </div>
      <div className='Detail-movie-wrapper'>
        <h2 className='Detail-title'>제목 : {movie.title}</h2>
          <div>
            <p>요약 : {movie.summary}</p>
          </div>
        <ul className='Detail-genres-list'>
          <li className='Detail-genres-item'>
            장르 : {movie.genres}
          </li>
        </ul>
        <div className='rating-year'>
          <strong>평점 : {movie.rating}</strong>
          <p>년도 : {movie.year}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail