import React from 'react'
import PropTyps from 'prop-types'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import {useState, useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import './Movie.css'

const Movie = ({id, coverImg, title, summary, genres,rating,year,runtime}) => {
  return (
    <div className='movie-box' >
        <div className='movie-list' >
          <Link to={`/movie/${id}`}>
              <img src={coverImg} alt="movie img" className='movie-img'/>
            <h3 className='title'>
              {title}
            </h3>
          </Link>
          <div className='empty-place'></div>
          
          <div className='genres-box'>
            <div className='genres-border-box'>
              <div className='genres-border1'></div>
              <div>장르</div>
              <div className='genres-border1'></div>
            </div>
            <ul className='genres-item' key={id}>
              {genres.map((genres,i) => (
                <li className='genres-list' key={i}>{genres}</li>
              ))}
            </ul>
            <div className='genres-border2'></div>
          </div>
          
          <div className='good-year'>
            <p><FontAwesomeIcon icon={faStar} /> : {rating}</p>
            <span>년도 : {year}</span>
          </div>
          
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