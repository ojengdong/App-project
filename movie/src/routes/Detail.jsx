import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Movie from '../Component/Movie'
import './Detail.css'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar } from "@fortawesome/free-solid-svg-icons";

const Detail = (props) => {
  const [movie,setMovie] =useState([]);
  const [loading,setLoading] = useState(true);
  const {id} = useParams();
    const getMovie = async () => {
      const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json()
    setMovie(json.data.movie);
    setLoading(false);
  }
  
    useEffect(() => {
        getMovie();
    }, [])
    console.log(movie)
  return loading ? (
      <div className='loading-box'>
        <h1 className='loading'>Loading...</h1>
        <div className='animation'></div>
      </div>
  ) : (
    <div className='Detail-box'>
      <Link to={`${process.env.PUBLIC_URL}/`}>
      <div className='back'><FontAwesomeIcon icon={faHouse}/></div>
      </Link>
      <div className='Detail-img-box'>
        <img src={movie.medium_cover_image} alt="" />
      </div>
      <div className='Detail-movie-wrapper'>
        <h2 className='Detail-title'>제목 : {movie.title}</h2>
        <ul className='Detail-genres-list'>
          <li className="Detail-genres-item">
            장르 : {movie.genres.join(' / ')}
          </li>
        </ul>
        <div className='empty'></div>
        <div className='good-year-time'>
          <p><FontAwesomeIcon icon={faStar}/> : {movie.rating}</p>
          <p>개봉년도 : {movie.year}</p>
          <p>러닝타임 : {movie.runtime}분</p>
        </div>
        <div className="sumary-box">
          {console.log(movie)}
          <p className='summary-text'>
            줄거리 :  
             {movie.description_full.length > 300 
            ? `${movie.description_full.slice(0,300)}...` : movie.description_full}
            </p>
        </div>
        <div className='url-box'>
          <div className='url-text'>
          <strong>Link</strong>
          <p className='url'>
            <Link 
              to={`${movie.url}`} 
              target='_blank'>
                {movie.url}
            </Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail