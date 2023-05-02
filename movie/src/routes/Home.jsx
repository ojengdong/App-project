import React from 'react'
import Movie from '../Component/Movie'
import { useState, useEffect, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow, Mousewheel,Keyboard } from "swiper";
import './Home.css'

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)

  return (
    
    <div className='movie-home'>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 10, 
          stretch: 0, 
          depth: 100, 
          modifier: 2,  
          slideShadows: true,
        }}
        navigation={true} 
        mousewheel={true} 
        modules={[EffectCoverflow,Navigation,Mousewheel,Keyboard]} 
        className="mySwiper"
      >
      <div className='movie-item'>
        {loading ? 
        <div className='loading-box'>
          <h1 className='loading'>Loading...</h1> 
          <div className='animation'></div> 
          </div>  : movies.map((movie) => (
          <SwiperSlide>
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
        />
        </SwiperSlide>
          ))}
      </div>
      </Swiper>
    </div>
  )
}

export default Home