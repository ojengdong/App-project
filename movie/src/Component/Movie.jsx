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

const Movie = ({id, coverImg, title, summary, genres,rating,year}) => {
  return (
    <div className='movie-box'>
        <div className='movie-list'>
          <Link to={`/movie/${id}`}>
              <img src={coverImg} alt="movie img" className='movie-img'/>
            <h3 className='title'>
              {title}
            </h3>
          </Link>
          <div className='summary-border'></div>
          <div>
            <p>{rating}</p>
            <span>{year}</span>
          </div>
          {/* <p className='summary'>{summary}</p>
          <ul className='genres-item'>
            {genres.map((genres) => (
              <li className='genres-list'>{genres}</li>
            ))}
          </ul> */}
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