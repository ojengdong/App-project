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
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='movie-list'>
              <img src={coverImg} alt="movie img" className='movie-img'/>
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
          </SwiperSlide>
      </Swiper>
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