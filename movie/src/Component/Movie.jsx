import React from 'react'
import PropTyps from 'prop-types'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import './Movie.css'

const Movie = ({id, coverImg, title, summary, genres}) => {
  return (
    <div className='movie-box'>
      <Swiper
          // slidesOffsetBefore={24} // 슬라이드 시작부분 여백
          // slidesOffsetAfter={24} // 슬라이드 끝부분 여백 
          // initialSlide={1} //시작 위치 값
          // centeredSlides={false} // true 시 슬라이드가 가운데로 배치
          slidesPerView={1} // 한 슬라이드에 보여줄 개수
          spaceBetween={50} // 슬라이드 사이 여백
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