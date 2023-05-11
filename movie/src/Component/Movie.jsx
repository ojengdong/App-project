import React from 'react'
import PropTyps from 'prop-types'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import {useState, useRef} from 'react'
import './Movie.css'

const Movie = ({id, coverImg, title, summary, genres}) => {
  return (
    <div className='movie-box'>
          <div className='movie-list'>
          <Link to={`/movie/${id}`}>
              <img src={coverImg} alt="movie img" className='movie-img'/>
            <h3 className='title'>
              {title}
            </h3>
          </Link>
          <p>{summary}</p>
          <ul>
            {genres.map((genres) => (
              <li>{genres}</li>
            ))}
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